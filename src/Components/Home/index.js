import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
import './Home.css';

export default class Home extends Component {
  disableTouchMove = (e) => {
    e.preventDefault();
  }

  componentDidMount() {
    document.addEventListener('touchmove', this.disableTouchMove, { passive: false });
  }

  componentWillUnmount() {
    document.removeEventListener('touchmove', this.disableTouchMove, { passive: false });
  }

  render() {
    return (
      <div>
        <div>
          <P5Wrapper sketch={sketch}/>
        </div>
      </div>
    );
  }
}
