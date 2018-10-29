import React from 'react';
import TitleCard from '../TitleCard';

import './TitleContainer.css'


const TitleContainer = ({ movies, name }) => {
  const favorites = movies.filter(movie => movie.favorite)
  const displayMovies = movies.map(movie => (
    <TitleCard 
      {...movie}
      key={movie.id}
    />
  ))
  console.log(favorites.length, name)
  
  if (favorites.length >= 4 && name === 'Recent Favorites') {
    return(
      <div>
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
      <div>
        <div className='container-name'>
        {
          favorites.length &&
          <div>
            <h3 className='title fade'>{name}</h3>
          </div>
        }
        </div>
        <div className='card-container'>
          {displayMovies}
        </div>
      </div>
    )
  }
}

export default TitleContainer;


