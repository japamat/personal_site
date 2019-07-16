import React, { Component } from 'react';
import Icon from '../Icon';
import './Carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0
    };
  }

  handleClick = newIdx => {
    const { imgs } = this.props;
    newIdx = newIdx < 0
      ? imgs.length - 1
      : newIdx % imgs.length;

    this.setState(st => ({
      idx: newIdx
    }))
  }

  render() {
    const { imgs } = this.props;
    const { idx } = this.state;

    const imgStyles = {
      backgroundImage: `url(${ imgs[idx].src })`
    }

    return (
      <React.Fragment>
        <div className="carousel d-flex flex-column align-items-center mb-3">
          <div className="carousel-img-desc d-flex align-items-center justify-content-center text-center">
            {imgs[idx].desc}
          </div>
          <div className="d-flex">
            <button className="carousel-btn carousel-btn-prev" onClick={() => this.handleClick(idx - 1)} ><Icon name="gt-arrow" width={40} /></button>
            <div
              className="carousel-img"
              style={imgStyles}
            />
            <button className="carousel-btn carousel-btn-next" onClick={() => this.handleClick(idx + 1)} ><Icon name="gt-arrow" width={40} /></button>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Carousel;