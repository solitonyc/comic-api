import React, { Component } from 'react';
import Nav from './Nav';
import HeroList from './HeroList';
import './header.css';




export default class Header extends Component {
  state = {
    name: 'h',
    apiData: []
  }

handleSubmit(e) {
  e.preventDefault()
  this.getApi()
}

handleChange(e) {
  const {name, value} = e.target;
  this.setState({
     [name]: value
   })
 }

 getApi() {
  fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${this.state.name}&apikey=52e4b1c55a34b26844f88e80975dd286`)
  .then(response => {
    return response.json();
  })
  .then((json) => {
    this.setState({
      apiData: json.data.results
    })
  })
}

  render() {
    return (
      <div>
        <header className="headerStyle">
        <h1>Solito's Marvel Superhero Search</h1>   
        <form className="searchForm" onSubmit={(e) => this.handleSubmit(e)}>
          <p className="inputInstructs">Enter One or Two Letters (ex: h or hu):</p>
          <input className="inputFieldBox" type='text' placeholder='ex: "h..."' value={this.state.name} name='name' onChange={(e) => this.handleChange(e)}/>
          <button className="inputButton" type='submit'>Search</button>
        </form>
      </header>
        <HeroList heroes = {this.state.apiData} />
      </div>
    )
  }
}

