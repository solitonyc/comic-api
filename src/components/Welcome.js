import React, { Component } from 'react';
import './welcome.css';
import '../images/mvector-image.png';
import welcomeImage from '../images/mvector-image.png';

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcomeStyle">
        <h1>Welcome to Solito's Marvel API App</h1>
        <img src={welcomeImage} />
      </div>
    )
  }
}
