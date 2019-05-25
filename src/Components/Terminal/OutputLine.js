import React, { Component } from 'react'
import './OutputLine.css';

export default class OutputLine extends Component {
  render() {
    return (
      <div className="output-line" >
        <div> {this.props.dir.split('/').pop()} $ {this.props.input} </div>
        <div> {this.props.output} </div>
      </div>
    )
  }
}
