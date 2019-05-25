import React, { Component } from 'react'
import InputLine from './InputLine';
import OutputLine from './OutputLine';
import uuid from 'uuid/v4';
import './Terminal.css';
import { 
        getHelp,
        clear,
        showPath,
        changeDir
      } from './helpers';
import rootFolder from './rootFolder';


export default class Terminal extends Component {

  constructor(props) {
    super(props);
  
    // an array of objects, each one with an id, a a command, and an output
    this.state = {
      pwd: '/Users/japamat',
      commands: [],
      root: rootFolder,
      validCommands: {
        pwd: showPath,
        help: getHelp,
        clear: clear,
        cd: changeDir,
      }
    }

    // this.showPath = this.showPath.bind(this);
    this.runCommand = this.runCommand.bind(this);
    this.getOutput = this.getOutput.bind(this);
    // this.clear = this.clear.bind(this);
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
      let newCommands = [...st.commands, newCommand];
      return {commands: newCommands};
    })
  }

  // find a better way to handle the clear function
  getOutput(command) {
    let commandArr = command.split(' ')
    let commandIn = commandArr[0];
    let cmdArgs = commandArr.slice(1);
    console.log(this.state);
    

    if (commandIn === 'cd') {
      return this.state.validCommands.cd.call(this, cmdArgs, this.state.root, this.state.pwd);
    } else if (commandIn === 'clear') {
      this.clear();
    } else if(this.state.validCommands.hasOwnProperty(commandIn)) {
      let fnToRun = this.state.validCommands[commandIn];
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
    let { commands } = this.state
    let prevCommands = !commands.length
      ? null
      : commands.map(command => (<OutputLine key={command.id} input={command.input} output={command.output} dir={command.dir} />));
    return (
      <div className="terminal-div" >
        {prevCommands}
        <InputLine runCommand={this.runCommand} prevCommands={this.state.commands.map(c => c.input)} idx={this.state.commands.length} pwd={this.state.pwd} root={this.state.root} />
      </div>
    )
  }
}
