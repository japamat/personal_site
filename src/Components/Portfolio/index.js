import React, { Component } from 'react'
import Card from '../Card';
import { projects } from './PortfolioContent';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    const { Warbler, DariaIpsum, Jobly, Terminal } = projects;
    const hr = <hr className="horizontal-rule"></hr>;
    return (
      <div className="container">
        <div className="d-flex flex-column align-items-center portfolio-div mt-3">
          <Card {...Warbler} />
          {hr}
          <Card {...DariaIpsum} />
          {hr}
          <Card {...Jobly} />
          {hr}
          <Card {...Terminal} />
        </div>
      </div>
    )
  }
}

export default Portfolio;