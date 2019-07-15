import React, { Component } from 'react'
import InputLine from './InputLine';
import OutputLine from './OutputLine';
import uuid from 'uuid/v4';
import './Terminal.css';
import { 
        getHelp,
        clear,
        showPath,
        handleCD,
        listContents
      } from './helpers';
import rootFolder from './rootFolder';


export default class Terminal extends Component {

  constructor(props) {
    super(props);
  
    // an array of objects, each one with an id, a a command, and an output
    this.state = {
      pwd: '/users/japamat',
      commands: [],
      loadIdx: 0, // used for when loading previous commands in output, slice from here. needs to be updated on clear
      root: rootFolder,
      validCommands: {
        pwd: showPath,
        help: getHelp,
        clear: clear,
        cd: handleCD,
        ls: listContents,
      }
    }

    // this.showPath = this.showPath.bind(this);
    this.runCommand = this.runCommand.bind(this);
    this.getOutput = this.getOutput.bind(this);
  }
  
  runCommand(command) {
    // split command here, send an array of args to getOutput
    let oldDir = this.state.pwd;
    let output = this.getOutput(command);
    let newCommand = {
      dir: oldDir,
      input: command,
      output: output,
      id: uuid()
    }
    this.setState(st => {
      return {
        commands: [...st.commands, newCommand],
      };
    })
  }

  // find a better way to handle the clear function
  getOutput(command) {
    let commandArr = command.split(' ')
    let commandIn = commandArr[0];
    let cmdArgs = commandArr.slice(1);
    const { root, pwd, validCommands } = this.state;

    if (commandIn === 'cd') {
      return validCommands.cd.call(this, cmdArgs, root, pwd);

    } else if (commandIn === 'clear') {
      return validCommands.clear.call(this);

    } else if (commandIn === 'ls') {
      return validCommands.ls.call(this, cmdArgs, pwd, root);

    } else if(validCommands.hasOwnProperty(commandIn)) {
      let fnToRun = validCommands[commandIn];
      return fnToRun.call(this, cmdArgs);

    } else {
      return `-bash: ${commandIn}: command not found`;
    }
  }

  /**
   * Potentially modify terminal commands to return all output as arrays
   * pass those output arrays to OutputLine in order to print multiple lines in a controlled fashion.
   */

  render() {
    let { commands, loadIdx } = this.state;
    /**
     * if there are previous commands to show, show them
     */
    let ranCommands = !commands.length
      ? null
      : commands.slice(loadIdx).map(command => (<OutputLine key={command.id} input={command.input} output={command.output} dir={command.dir} />));
    return (
      <div className="terminal-div" >
        {ranCommands}
        <InputLine 
          runCommand={this.runCommand}
          commands={commands.map(c => c.input)}
          prevCommands={commands.map(c => c.input)}
          idx={commands.length}
          pwd={this.state.pwd}
          root={this.state.root} />
      </div>
    )
  }
}
