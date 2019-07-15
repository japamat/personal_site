import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Ipsum from '../IpsumGenerator';
import Terminal from '../Terminal';
import Home from '../Home';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
              exact
              path="/ipsum"
              render={() => <Ipsum />} />
        
          <Route
              exact
              path="/io"
              render={() => <Terminal />} />

          <Route
              exact
              path="/about"
              render={() => <About />} />
          
          <Route
              exact
              path="/portfolio"
              render={() => <Portfolio />} />
          
          <Route
              exact
              path="/contact"
              render={() => <Contact />} />
          
          <Route
              exact
              path="/home"
              render={() => <Home />} />
          
          <Redirect
              to="/home"
              />
          
        </Switch>
      </div>
    )
  }
}

export default Routes;
