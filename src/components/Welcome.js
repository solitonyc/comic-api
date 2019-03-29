import React, { Component } from 'react';
import './welcome.css';
import '../images/mcsheros.png';
import welcomeImage from '../images/mcsheros.png';

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcomeStyle">
        <h1>Welcome to Solito's Marvel API App</h1>
        <img className="welcomeStyle" src={welcomeImage} />
      </div>
    )
  }
}
