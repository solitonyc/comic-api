import React, { Component } from 'react';
import './ListItem.css';

const hulkData = 
{
  "code": 200,
  "status": "Ok",
  "copyright": "© 2019 MARVEL",
  "attributionText": "Data provided by Marvel. © 2019 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2019 MARVEL</a>",
  "etag": "bab00936f78f8265f0c7d9fe1415665285e42a81",
  "data": {
    "offset": 0,
    "limit": 1,
    "total": 18,
    "count": 1,
    "results": [
      {
        "id": 1009351,
        "name": "Hulk",
        "description": "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
        "modified": "2014-06-10T16:12:58-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
        "comics": {
          "available": 1564,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009351/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/41112",
              "name": "5 Ronin (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/36365",
              "name": "5 Ronin (2010) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/38753",
              "name": "5 Ronin (2010) #2 (BROOKS COVER)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43488",
              "name": "A+X (2012) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43506",
              "name": "A+X (2012) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/320",
              "name": "Actor Presents Spider-Man and the Incredible Hulk (2003) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/38524",
              "name": "Age of X: Universe (2011) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/38523",
              "name": "Age of X: Universe (2011) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/24053",
              "name": "All-New Savage She-Hulk (2009) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/24252",
              "name": "All-New Savage She-Hulk (2009) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12689",
              "name": "Alpha Flight (1983) #29"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12650",
              "name": "Alpha Flight (1983) #110"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12651",
              "name": "Alpha Flight (1983) #111"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
              "name": "Alpha Flight (1983) #127"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6527",
              "name": "The Amazing Spider-Man (1963) #14"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6795",
              "name": "The Amazing Spider-Man (1963) #381"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/35528",
              "name": "Amazing Spider-Man (1999) #667"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16904",
              "name": "Amazing Spider-Man Annual (1964) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16886",
              "name": "Amazing Spider-Man Annual (1964) #12"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/36956",
              "name": "Amazing Spider-Man Annual (2011) #38"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 433,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009351/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/12429",
              "name": "5 Ronin (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/15276",
              "name": "5 Ronin (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
              "name": "A+X (2012 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/458",
              "name": "Actor Presents Spider-Man and the Incredible Hulk (2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
              "name": "Age of X: Universe (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/7231",
              "name": "All-New Savage She-Hulk (2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
              "name": "Alpha Flight (1983 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
              "name": "Amazing Spider-Man (1999 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13205",
              "name": "Amazing Spider-Man Annual (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
              "name": "Amazing Spider-Man Annual (1964 - 2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24323",
              "name": "Ant-Man and the Wasp Adventures (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
              "name": "Avengers (1996 - 1997)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
              "name": "Avengers (2010 - 2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
              "name": "Avengers (1963 - 1996)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22547",
              "name": "Avengers (2016 - 2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
              "name": "Avengers (1998 - 2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9859",
              "name": "Avengers & the Infinity Gauntlet (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24044",
              "name": "Avengers & The Infinity Gauntlet (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
              "name": "Avengers Annual (1967 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
              "name": "Avengers Assemble (2004)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 2427,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009351/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/702",
              "name": "INCREDIBLE HULK (1999) #62",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/703",
              "name": "Interior #703",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/704",
              "name": "INCREDIBLE HULK (1999) #63",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/705",
              "name": "Interior #705",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/706",
              "name": "INCREDIBLE HULK (1999) #64",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/707",
              "name": "Interior #707",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/872",
              "name": "HULK: GRAY (2003) #2",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/873",
              "name": "Interior #873",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/874",
              "name": "HULK: GRAY (2003) #3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/875",
              "name": "Interior #875",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1134",
              "name": "Interior #1134",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1217",
              "name": "INCREDIBLE HULK (1999) #68",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1218",
              "name": "Interior #1218",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1219",
              "name": "INCREDIBLE HULK (1999) #69",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1220",
              "name": "Interior #1220",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1221",
              "name": "INCREDIBLE HULK (1999) #70",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1222",
              "name": "Interior #1222",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1223",
              "name": "INCREDIBLE HULK (1999) #71",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1224",
              "name": "Interior #1224",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1225",
              "name": "INCREDIBLE HULK (1999) #75",
              "type": "cover"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 25,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009351/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
              "name": "Acts of Vengeance!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
              "name": "Age of X"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
              "name": "Chaos War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
              "name": "Dark Reign"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/297",
              "name": "Fall of the Hulks"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
              "name": "Fall of the Mutants"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
              "name": "Fear Itself"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
              "name": "House of M"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
              "name": "Infinity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
              "name": "Infinity War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/317",
              "name": "Inhumanity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
              "name": "Initiative"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/311",
              "name": "Marvel NOW!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
              "name": "Maximum Security"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
              "name": "Onslaught"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/266",
              "name": "Other - Evolve or Die"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/212",
              "name": "Planet Hulk"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/295",
              "name": "Realm of Kings"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
              "name": "Secret Invasion"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
              "name": "Secret Wars"
            }
          ],
          "returned": 20
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1009351/hulk?utm_campaign=apiRef&utm_source=52e4b1c55a34b26844f88e80975dd286"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Hulk_(Bruce_Banner)?utm_campaign=apiRef&utm_source=52e4b1c55a34b26844f88e80975dd286"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009351/hulk?utm_campaign=apiRef&utm_source=52e4b1c55a34b26844f88e80975dd286"
          }
        ]
      }
    ]
  }
}

class ListItem extends Component {
  render() {
    const metaData = comic.data.results[0];
    const {thumbnail, issueNumber, pageCount, dates, prices} = metaData;
    return (
      <div className="comic">
        <div className="image-container">
          <img className="comic-image" src={'${images.path}.${images.extension'}/>
        </div>
          <h1>Title: {sample.data.results[0].title}</h1>
          <h2>Issue Number: {sample.data.results[0].issueNumber}</h2>
          <h2>Price: {sample.data.results[0].prices[0].price}</h2>
          <img src={`${sample.data.results[0].images[0].path}.${sample.data.results[0].images[0].extension}`}/>
      </div>
    );
  }
}

export default ListItem;

