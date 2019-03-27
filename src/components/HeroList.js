import React, { Component } from 'react';
import './herolist.css';


export default class HeroList extends Component {
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
  return this.state.apiData.map( pieceOfData => <div className="listOutput" key={pieceOfData.id}> <p className="heroName">{pieceOfData.name}</p> <p className="heroDescrip">{pieceOfData.description}</p> <img className="heroImage" src={`${pieceOfData.thumbnail.path}.${pieceOfData.thumbnail.extension}`} />  </div>)
  }
}



render() {
  console.log(this.state)
    return ( 
    <div className="searchBox">
    
      <form className="searchForm" onSubmit={this.handleSubmit}>
      <h1>Enter a Character String:</h1>
        <input className="inputFieldBox" type='text' value={this.state.name} name='name' onChange={this.handleChange}/>
        <input className="inputButton" type='submit' placeholder='Text Search'/>
      </form>
        {this.printApiData()}
      
    </div>
    );
  }
}
