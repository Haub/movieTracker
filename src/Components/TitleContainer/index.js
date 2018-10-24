import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { TitleCard } from '../TitleCard';


const TitleContainer = ({ movies }) => {

  const displayMovies = movies.map(movie => (
    <TitleCard 
      {...movie}
      key={uuid()}
    />
  ))

  return(
    <div>
      {displayMovies}

    </div>

  )

}



const mapStateToProps = (state) => ({
  movies: state.movies
})


export default connect (mapStateToProps)(TitleContainer);