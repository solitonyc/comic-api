import React, { Component } from 'react';
import Header from './components/Header';
import HeroList from './components/HeroList';
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <HeroList />
        <Footer />
      </div>
    )
  }
}

export default App;
