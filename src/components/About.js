import React, { Component } from 'react';
import './about.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>Instructions</h1>
            <p>There are 3 pages. Use the navigation bar on the upper left to navigate across the three pages: Welcome, Search and About. In the search page, just enter one or two characters in the input form. Then click on the Search button in order to retrieve character that match the letters you provided in the input form. Once all the characters have been matched by the system, they will all appear in the page.</p>
        <h1>About Marvel</h1>
            <p>Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt Disney Company, is one of the world's most prominent character-based entertainment companies, built on a proven library of more than 8,000 characters featured in a variety of media over seventy-five years. Marvel utilizes its character franchises in entertainment, licensing and publishing. For more information visit marvel.com. © 2018 MARVEL</p>
        <h1>All Rights Reserved</h1>
            <p>All images and names rendered here in are property and copyright of Marvel Comics. This non-commercial website was produced by Solito Reyes.</p>    
      </div>
    )
  }
}
