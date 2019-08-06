import React, { Component } from 'react'
import Card from '../Card';
import { projects, portfolioIntro } from './PortfolioContent';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    const { Warbler, DariaIpsum, Jobly, Terminal, gifsmos } = projects;
    const hr = <hr className="horizontal-rule"></hr>;
    return (
      <div className="portfolio-wrapper">
        <div className="portfolio-header">
          <h2>Portfolio</h2>
          {portfolioIntro}
        </div>
        <div className="d-flex justify-content-around flex-wrap">
          <Card {...Terminal} />
          <Card {...Warbler} />
          <Card {...gifsmos} />
          <Card {...DariaIpsum} />
        </div>
      </div>
    )
  }
}

export default Portfolio;