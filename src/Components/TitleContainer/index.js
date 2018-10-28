import React from 'react';


import TitleCard from '../TitleCard';


import './TitleContainer.css'


  const TitleContainer = ({ movies }) => {
  const displayMovies = movies.map(movie => (
    <TitleCard 
      {...movie}
      key={movie.id}
    />
  ))

  return(
    <div className='card-container'>
      {displayMovies}
    </div>
  )
}

export default TitleContainer;


