import React, { Component } from 'react';
import Carousel from '../Carousel';
import { AboutImgs, AboutIntro } from './AboutContent';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="about-div" >
          <div className="mt-2 text-center about-title" >
            <h2>About</h2>
            <p>{AboutIntro}</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Carousel imgs={AboutImgs}/>
          </div>
        </div>
      </div>
    )
  }
}

export default About;