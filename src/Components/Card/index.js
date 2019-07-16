import React, { Component } from 'react';
import Icon from '../Icon';
import uuid from 'uuid/v4';
import './Card.css';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { imgSrc, desc, name, skills, skillsTitle, gitHub, hyperlink } = this.props;
    return (
      <div className="d-flex flex-column align-items-center mt-4 mb-1">
        <h3>{name}</h3>
        <p>{desc}</p>
        <div className="row japamat-card p-1 d-flex justify-content-between">
          <div className="col-md-4 d-flex align-items-center justify-content-center my-3 px-5" >
            <a href={hyperlink} target="_blank" rel="noopener noreferrer">
              <img src={imgSrc} alt={imgSrc} className="card-img" />
            </a>
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-between my-3 px-3 text-center" >
            <div>
              <h5>{ skillsTitle ? skillsTitle : null }</h5>
              <ul className="list-inline">
                {
                  skills.map(p => {
                    return (
                      <li key={uuid()} className="px-2 list-inline-item">
                        {p}
                      </li>
                    );
                  })
                }
              </ul>
            </div>
            <div className="d-flex justify-content-center">
              <span className="mx-3">
                <a href={gitHub} target="_blank" rel="noopener noreferrer">
                  <Icon name="github" width={40} height={40} fill="#e8e1de"/>
                </a>
              </span>
              <span className="mx-3 link-icon">
                <a href={hyperlink} target="_blank" rel="noopener noreferrer">
                  <Icon name="link" width={40} height={40} fill="#e8e1de"/>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;