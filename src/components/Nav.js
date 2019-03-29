import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import About from './About';

import Header from './Header';
import './nav.css';
import Welcome from './Welcome';

export default class Nav extends Component {
  render() {
    return (
    <div>
      <nav className="navStyle">
        <Link to="/welcome">Welcome</Link> |
        <Link to="/search">Search Characters</Link> |
        <Link to="/about">About</Link>
      </nav>

      <Route
      path='/welcome'
      component={Welcome}
      />
      
      <Route
      path='/about'
      component={About}
      />
      <Route 
      path = '/search'
      component={Header}
      />
    
    </div>

    )
  }
}
