import React, { Component } from 'react'
import Card from '../Card';
import { projects } from './PortfolioContent';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    const { Warbler, DariaIpsum, Jobly, Terminal, gifsmos } = projects;
    const hr = <hr className="horizontal-rule"></hr>;
    return (
      <div className="container">
        <div className="d-flex flex-column align-items-center portfolio-div mt-3">
          <Card {...gifsmos} skillsTitle='stack' />
          {hr}
          <Card {...Jobly} skillsTitle='stack' />
          {hr}
          <Card {...DariaIpsum} skillsTitle='stack' />
          {hr}
          <Card {...Terminal} skillsTitle='stack' />
          {hr}
          <Card {...Warbler} skillsTitle='stack' />
        </div>
      </div>
    )
  }
}

export default Portfolio;