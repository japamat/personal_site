import React, { Component } from 'react';
import Icon from '../Icon';
import uuid from 'uuid/v4';
import classNames from 'classnames';
import './card.css';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'About',
    };
  }
  toggleFeautures = evt => {
    evt.preventDefault();
    this.setState({ active: evt.target.value });
  }

  render() {
    const { imgSrc, desc, name, skills, features, gitHub, hyperlink } = this.props;
    const { active } = this.state;

    let cardContent;
    if (active === 'Features') {
      cardContent =
        <div className="d-flex justify-content-center flex-wrap">
          {
            features.map(p => {
              return (
                <span key={uuid()} className="px-2 py-1">
                  {p}
                </span>
              );
            })
          }
        </div>
    } else if (active === 'Stack') {
      cardContent =
        <div className="d-flex justify-content-center flex-wrap">
        {
          skills.map(p => {
            return (
              <span key={uuid()} className="px-2 py-1">
                {p}
              </span>
            );
          })
        }
      </div>
    } else {
      cardContent = 
        <div className="d-flex justify-content-center flex-wrap">
          {desc}
        </div>
    }

    return (
      <div className="card-wrapper">
        <div className="d-flex align-items-center justify-content-around">
          <h3>{name}</h3>
          <span  className="mb-2">
            <a href={gitHub} target="_blank" className="mx-3" rel="noopener noreferrer">
              <Icon name="github" width={30} height={30} fill="#e8e1de"/>
            </a>
            <a href={hyperlink} target="_blank" className="mx-3" rel="noopener noreferrer">
              <Icon name="link" width={30} height={30} fill="#e8e1de" className="link-icon" />
            </a>
          </span>
        </div>
        <div className="japamat-card">
          
          <div className="card-stack-features-wrapper d-flex justify-content-center flex-wrap" >
            <div className="card-stack-features">
              <div className="card-toggle-button-wrapper d-flex">
                <button onClick={this.toggleFeautures} value="About" className={ classNames('card-toggle-button', {
                  'card-toggle-button-active': active === 'About',
                }) }>About</button>
                <button onClick={this.toggleFeautures} value="Features" className={ classNames('card-toggle-button', {
                  'card-toggle-button-active': active === 'Features',
                }) }>Features</button>
                <button onClick={this.toggleFeautures} value="Stack" className={classNames('card-toggle-button', {
                  'card-toggle-button-active': active === 'Stack',
                })}>stack</button>
              </div>
              <div className="d-flex flex-column align-items-center p-3">
                {cardContent}
              </div>
            </div>
            <a href={hyperlink} target="_blank" rel="noopener noreferrer">
              <img src={imgSrc} alt={imgSrc} className="card-img" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;