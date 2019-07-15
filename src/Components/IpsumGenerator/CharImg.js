import React, { Component } from 'react'

class CharImg extends Component {
  componentDidUpdate() {
    const img = document.getElementById('character-img');
    img.classList.remove('fadeInLeft');
    setTimeout(() => {
      img.classList.add('fadeInLeft')

    }, 500)
    img.classList.add('fadeInLeft');
  }
  render() {
    return (
      <div>
        <img id="character-img" className="animated fadeInLeft" src={this.props.img} alt="" />
      </div>
    )
  }
}

export default CharImg;