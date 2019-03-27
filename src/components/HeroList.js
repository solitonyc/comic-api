import React, { Component } from 'react';
import './herolist.css';


export default class HeroList extends Component {


printApiData() {
  if(this.props.heroes){
  return this.props.heroes.map( hero => <div className="listOutput" key={hero.id}> <p className="heroName">{hero.name}</p> <p className="heroDescrip">{hero.description}</p> <img className="heroImage" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />  </div>)
  }
}

render() {
  console.log(this.props)
    return ( 
    
      <div className='searchBox'>
      {this.printApiData()}
      </div>
        
      
    );
  }
}
