import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        apiData: null
      }
  }
  
componentDidMount() {
  this.getApi()
}

getApi() {
  fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=hu&apikey=52e4b1c55a34b26844f88e80975dd286`)
  .then(response => {
    return response.json();
  })
  .then((json) => {
    this.setState({
      apiData: json.data.results
    })
  })
}

handleSubmit(e) {
  e.preventDefault()
  this.getApi()
}

printApiData() {
  if(this.state.apiData){
  return this.state.apiData.map( apiData => ( <h2 key={apiData.id}>{apiData.name}</h2> ))
  }
}

render() {
  console.log(this.state.apiData)
    return ( <div className="app-page">
      {this.printApiData()}
    </div>
    );
  }
}

export default App;
