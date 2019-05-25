import React, { Component } from 'react'
import './OutputLine.css';

export default class OutputLine extends Component {
  render() {
    const dirToShow = this.props.dir.split('/').pop();
    return (
      <div className="output-line" >
        <div> {dirToShow} $ {this.props.input} </div>
        <div> {this.props.output} </div>
      </div>
    )
  }
}
