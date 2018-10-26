import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { TitleCard } from '../TitleCard';

import './TitleContainer.css'


const TitleContainer = ({ movies }) => {

  const displayMovies = movies.map(movie => (
    <TitleCard 
      {...movie}
      key={uuid()}
    />
  ))

  return(
    <div className='card-container'>
      {displayMovies}
    </div>
  )
}



const mapStateToProps = (state) => ({
  movies: state.movies
})


export default connect (mapStateToProps)(TitleContainer);