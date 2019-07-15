import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { isMobile } from '../../lib/uiHelpers';
import classNames from 'classnames';
import './NavBar.css';
import Icon from '../Icon';

class NavBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      firstToggle: false,
      isMobile: null,
      expanded: false
    }
  }

  componentDidMount() {
    this.setState(st => ({
      isMobile: isMobile()
    }))
  }

  toggleExpanded = (e) => {
    const { expanded, firstToggle } = this.state;
    this.setState({ expanded: !expanded });
    if (!firstToggle) {
      this.setState({ firstToggle: true });
      document.querySelector('.mobile-menu').classList.add('collapsed');
    }
  }
  
  desktopNav = () => {
    return (
      <div className="d-flex justify-content-between align-items-center container" >
        <div className="ml-3">
          <NavLink className="nav-link" to="/home">
            JPM
          </NavLink>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/portfolio">
            Porfolio
          </NavLink>
          <NavLink className="nav-link" to="/io">
            CLI
          </NavLink>
          <NavLink className="nav-link" to="/ipsum">
            Ipsum
          </NavLink>
        </div>
      </div>
    );
  }

  mobileNav = (expanded) => {
    const { firstToggle } = this.state;
    return (
      <div className="navbar-mobile navbar-div">
        <button
          onClick={this.toggleExpanded}
          className="btn nav-menu-btn"
        >
          <Icon
            name="menu"
            width={36}
            fill="#e8e1de"
          />
        </button>
        <div className={classNames('mobile-menu', {
          'expanded': expanded,
          'collapsed': firstToggle,
        })} >
          <NavLink className="nav-link" to="/home" onClick={this.toggleExpanded}>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about" onClick={this.toggleExpanded}>
            About
          </NavLink>
          <NavLink className="nav-link" to="/portfolio"  onClick={this.toggleExpanded}>
            Porfolio
          </NavLink>
          <NavLink className="nav-link" to="/io" onClick={this.toggleExpanded}>
            CLI
          </NavLink>
          <NavLink className="nav-link" to="/ipsum" onClick={this.toggleExpanded}>
            Ipsum
          </NavLink>
        </div>
      </div>
    )
  }
  
  render () {
    const { expanded, isMobile } = this.state;

    return (
      <div className="navbar-div">
        {
          isMobile
            ? this.mobileNav(expanded)
            : this.desktopNav()
        }
      </div>
    );
  }
}

export default NavBar;