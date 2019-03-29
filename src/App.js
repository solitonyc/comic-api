import React, { Component } from 'react';
import Nav from './components/Nav';
import HeroList from './components/HeroList';
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Nav  />
        <HeroList />
        <Footer />
      </div>
    
    )
  }
}

export default App;
