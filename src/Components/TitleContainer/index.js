import React from 'react';
import TitleCard from '../TitleCard';
import './TitleContainer.css';

const TitleContainer = ({ movies, name, search }) => {
  let uuidv4 = require("uuid/v4");
  const favorites = movies.filter(movie => movie.favorite);
  const filteredMovies = movies.filter(movie => movie.title.includes(search));
  const displayMovies = filteredMovies.map(movie => (
    <TitleCard 
      {...movie}
      key={uuidv4()}
    />
  ));
  
  if (favorites.length >= 4 && name === 'Recent Favorites') {
    return(
      <div className={search.length ? 'pad' : ''}>
        <div className='container-name'>
          <div className='favorites-page'>
            <h3 className='title fade'>{name}</h3>
            <h3 className='title'>(see all)</h3>
          </div>
        </div>
        <div className='card-container-favorites'>
          {displayMovies}
        </div>
      </div>
    )
  } else {
    return(
      <div className={search.length ? 'pad' : ''}>
        <div className='container-name'>
        {/* {
          favorites.length &&
          <div>
            <h3 className='title fade'>{name}</h3>
          </div>
        } */}
        </div>
        <div className='card-container'>
          {displayMovies}
        </div>
      </div>
    )
  }
}

export default TitleContainer;


