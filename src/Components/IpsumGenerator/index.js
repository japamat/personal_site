import React, { Component } from 'react';
import './Ipsum.css';
import { makeText } from './helpers';
import Icon from '../Icon';

// clean up chains and img imports with export files
import quinn from './dariaChains/Quinn';
import daria from './dariaChains/Daria';
import jane from './dariaChains/Jane';
import trent from './dariaChains/Trent';
import tom from './dariaChains/Tom';
import mrDeMartino from './dariaChains/Mr. DeMartino';
import dariaPNG from './img/daria2.png';
import janePNG from './img/jane.png';
import quinnJPG from './img/quinn.jpg';
import trentJPG from './img/trent.jpg';
import demartinoPNG from './img/mrD.png';

class Ipsum extends Component {
	static defaultProps = {
		daria,
		jane,
		quinn,
		trent,
		tom,
		mrDeMartino,
		maxLen: 100,
		imgs: {
			mrDeMartino: demartinoPNG,
			trent: trentJPG,
			daria: dariaPNG,
			jane: janePNG,
			quinn: quinnJPG
		}
	};

	constructor(props) {
		super(props);
		this.state = {
			character: undefined,
			ipsum: ''
		};
	}

	handleChange = (e) => this.setState({ ipsum: e.target.value });

	changeChar = (e) => {
		this.setState({
			character: e.target.name || null
		});
		if (e.target.name) this.changeIpsum(e.target.name);
	};

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	changeIpsum = (char) => {
		this.setState({
			ipsum: makeText(this.props[char]) + '.'
		});
	};

	copyToClip = (e) => {
		e.preventDefault();
		document.getElementById('ipsum-out').select();
		document.execCommand('copy');
		document.querySelector('.is-copied').classList.add('copied');
		setTimeout(() => {
			document.querySelector('.is-copied').classList.remove('copied');
		}, 2000);
	};

	render() {
		const { character } = this.state || null;
		const { imgs } = this.props;
		let toShow = character ? (
			<div className="d-flex align-items-center justify-content-start flex-column animated fadeIn">
				<div className="text-area d-flex align-items-center flex-column">
					<textarea
						id="ipsum-out"
						className="textarea-ipsum mt-3"
						name="ipsum"
						onChange={this.handleChange}
						value={this.state.ipsum || ''}
					/>
					<div>
						<button className="btn btn-sm m-3 btn-info" name={null} onClick={(e) => this.changeChar(e)}>
							<Icon name="back-arrow" width={24} fill="#fff" />
						</button>
						<button className="btn btn-sm m-3 btn-info" onClick={() => this.changeIpsum(character)}>
							<Icon name="refresh" width={24} fill="#fff" />
						</button>
						<button className="btn btn-sm m-3 btn-info copy-btn" onClick={(e) => this.copyToClip(e)}>
							<Icon name="copy" width={24} fill="#fff" />
						</button>
					</div>
				</div>
			</div>
		) : (
			null
		);

		return (
			<div className="container">
				{character ? (
					<div className="d-flex flex-column align-items-center" >
						<h1 className="mt-3">{character[0].toUpperCase() + character.slice(1)} Ipsum</h1>
						<img
							key={`${character}-ipsum-png`}
							src={imgs[character]}
							alt={character}
							className="character-img animated fadeInLeft"
						/>
					</div>
				) : (
					<div className="d-flex flex-column align-items-center">
						<h1 className="mt-3">Daria Ipsum</h1>
						<h5>Select Character</h5>
						<div className="d-flex justify-content-center flex-wrap">
							{Object.entries(imgs).map(([ char, img ]) => {
								return (
									<img
										key={`${char}-ipsum-png`}
										src={img}
										alt={char}
										className="character-img animated fadeInLeft m-3"
										name={char}
										onClick={(e) => this.changeChar(e)}
									/>
								);
							})}

						</div>
					</div>
				)}
				<p className="is-copied">
					<small>copied!</small>
				</p>
				{toShow}
			</div>
		);
	}
}

export default Ipsum;
