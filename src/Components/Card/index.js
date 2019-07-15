import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';
import './Card.css';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const { imgSrc, desc, name, skills } = this.props;
    return (
      <div className="d-flex flex-column align-items-center">
        <h3>{name}</h3>
        <p>{desc}</p>
        <div className="row japamat-card p-1">
          <div className="col-md-4 d-flex align-items-center justify-content-center my-3 px-5" >
            <img src={imgSrc} alt={imgSrc} className="card-img" />
          </div>
          <div className="col-md-8 my-3 px-3 text-center" >
            <h5>Stack</h5>
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
        </div>
      </div>
    );
  }
}

export default Card;