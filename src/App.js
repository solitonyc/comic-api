import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        apiData: []
      }
  
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleChange(e) {
  const {name, value} = e.target;

  this.setState({
     [name]: value
   })
 } 

// componentDidMount() {
//   this.getApi()
// }

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

handleSubmit(e) {
  e.preventDefault()
  this.getApi()
}

printApiData() {
  if(this.state.apiData){
  return this.state.apiData.map( pieceOfData => <div key={pieceOfData.id}> <p className="heroName">{pieceOfData.name}</p> <p className="heroDescrip">{pieceOfData.description}</p> <img className="heroImage" src={`${pieceOfData.thumbnail.path}.${pieceOfData.thumbnail.extension}`} />  </div>)
  }
}

render() {
  console.log(this.state)
    return ( 
    <div className="app-page">
    <h1>Marvel Character Search</h1>
    <h2>Enter a Character:</h2>
      <form onSubmit={this.handleSubmit}>
        <input id="inputStyle" type='text' value={this.state.name} name='name' onChange={this.handleChange}/>
        <input id="submitButton" type='submit' placeholder='Text Search'/>
      </form>
        {this.printApiData()}
      
    </div>
    );
  }
}

export default App;
