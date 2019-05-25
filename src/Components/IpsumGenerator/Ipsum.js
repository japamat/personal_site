import React, { Component } from 'react';
import './Ipsum.css';
import { makeText } from './helpers';
import IpsumForm from './IpsumForm';
import quinn from './dariaChains/Quinn';
import daria from './dariaChains/Daria';
import jane from './dariaChains/Jane';
import jake from './dariaChains/Jake';
import helen from './dariaChains/Helen';
import mrOneill from "./dariaChains/Mr. O'Neill";
import mrDeMartino from './dariaChains/Mr. DeMartino';
import tom from './dariaChains/Tom';


class Ipsum extends Component {
	static defaultProps = {
		daria,
		jane,
		quinn,
		jake,
		helen,
		mrOneill,
		mrDeMartino,
		tom,
		maxLen: 100
	};

	constructor(props) {
		super(props);
		// console.log(this.props.chain);

		this.state = {
			ipsum: undefined,
			character: 'daria'
		};
		this.changeChar = this.changeChar.bind(this);
		this.makeIpsumText = this.makeIpsumText.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	changeChar(char) {
		this.setState((st) => ({ character: char }));
  }
  
	handleChange(e) {
  	this.setState({
			[e.target.name]: e.target.value
		});
  }

	makeIpsumText() {
		const { character } = this.state;
		let text = makeText(this.props[character]);

		this.setState({ ipsum: text });
	}

	/** set markov chains:
     *
     *  for text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

	render() {
    let thing = this.state.ipsum;
    // console.log(thing);
    
    let ipsumText = this.state.ipsum
      ? <textarea className="textarea-ipsum" name='ipsum' onChange={this.handleChange} value={thing} />
      : null;
		return (
			<div>
        <IpsumForm 
          changeChar={this.changeChar}
          makeIpsumText={this.makeIpsumText}
        />
        {ipsumText}
			</div>
		);
	}
}

export default Ipsum;
