import React, { Component } from 'react';
import './InputLine.css';

export default class InputLine extends Component {
	constructor(props) {
		super(props);

		this.state = {
      root: this.props.root,
      pwd: this.props.pwd,
      idx:  this.props.idx,
			command: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getPrevCommand = this.getPrevCommand.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
    // for arrow key up - get prev command
    if (e.keyCode === 38) {
      this.setState(st => ({
        command: this.props.prevCommands[this.state.idx],
        idx: Math.max((this.state.idx - 1), 0)
      }));
      // arrow key down
    } else if (e.keyCode === 40) {
        this.setState(st => ({
          command: this.props.prevCommands[this.state.idx],
          idx: Math.min((this.state.idx + 1), this.props.idx - 1)
        }));
      // other typing input
    } else if (!e.keyCode) {
      this.setState({
        [e.target.name]: e.target.value,
        idx: this.props.idx
      });
    }
    
    // if (e.keyCode === 38) {
  }

  getPrevCommand(e) {
    this.handleChange(e);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { command } = this.state;
    this.props.runCommand(command);
    this.setState(st => ({
      command: '',
      idx: this.props.idx
    }));
  }

	render() {
    const shortPath = this.props.pwd.slice(this.props.pwd.lastIndexOf('/') + 1);
		return (
			<div className="input-line" >
        <form onSubmit={this.handleSubmit} className="input-form" >
        <label className="" htmlFor="command">{shortPath} $ </label>
          <input
            onKeyUp={this.getPrevCommand}
            autoComplete="off"
            id="cli-input"
            onChange={this.handleChange}
            value={this.state.command}
            type="text"
            autoFocus={true}
            name="command"
          />
        </form>
			</div>
		);
	}
}
