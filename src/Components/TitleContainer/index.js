import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { TitleCard } from '../TitleCard';
import { controlFavorites } from '../../actions';

import './TitleContainer.css'


const TitleContainer = ({ movies, user, controlFavorites }) => {

  const displayMovies = movies.map(movie => (
    <TitleCard 
      {...movie}
      user={user}
      key={uuid()}
      controlFavorites={controlFavorites}
    />
  ))

  return(
    <div className='card-container'>
      {displayMovies}
    </div>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  controlFavorites: (movie) => dispatch(controlFavorites(movie))
})


export default connect (mapStateToProps, mapDispatchToProps)(TitleContainer);