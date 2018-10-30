import React from 'react';
import PropTypes from 'prop-types';
import './TitlePage.css';

export const TitlePage = ( { movie } ) => {
  const { poster, title, runtime, rating, overview, 
    mpaa, release, budget, homepage, imdb, 
     revenue } = movie;
    
  return (
    <main className='title-page-container pad'>
      <aside className='main-poster'
      >
        <img src={`https://image.tmdb.org/t/p/original/${poster}`} 
          className='poster-image'
          alt='title poster'
        />
      </aside>
      <aside className='title-description'>
        <h3 className='title-movie-title'>{title}</h3>
        <p className='title-movie-specs'>
          <span className='title-rating'>{rating}</span>
          <span className='title-mpaa'>{mpaa.certification}</span>
          {runtime}
        </p>
     
        <p className='title-movie-tagline'>{overview}</p>
        <p className='title-movie-tagline'>{release}</p>
        <p className='title-movie-tagline'>{budget}</p>
        <p className='title-movie-tagline'>{budget}</p>
        <p className='title-movie-tagline'>{imdb}</p>
        <p className='title-movie-tagline'>{homepage}</p>
        <p className='title-movie-tagline'>{revenue}</p>
      </aside>
    </main>
  )
}

const { object } = PropTypes;
TitlePage.propTypes = {
  movie: object
};