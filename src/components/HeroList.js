import React, { Component } from 'react';
import './herolist.css';
import bgImage from '../images/mvector-image.png';


export default class HeroList extends Component {

printApiData() {
  if(this.props.heroes){
  return this.props.heroes.map( hero => <div className="listOutput" key={hero.id}> <p className="heroName">{hero.name}</p> <img className="heroImage" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} /> <p className="heroDescrip">{hero.description}</p> </div>)
  }
}



render() {
  let style = {
    backgroundImage: `url(${bgImage})`
  }
  
    return ( 
      <div style={style} className='searchBox'>
         {this.printApiData()}
      </div>

      
    );
  }
}
