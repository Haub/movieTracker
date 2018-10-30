import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TitleCard from '../TitleCard';
import './TitleContainer.css';

const TitleContainer = ({ movies, name, search }) => {
  let uuidv4 = require("uuid/v4");
  const favoriteCount = movies.filter(movie => movie.favorite);

  const filteredMovies = search && search.length 
    ? movies.filter(movie => movie.title.includes(search))
    : movies

  const divStyle = {
    marginTop: "150px"
  };  
  
  const displayMovies = filteredMovies.map(movie => (
    <TitleCard 
      {...movie}
      key={uuidv4()}
    />
  ));
  const searchActive = search && search.length > 0 ? true : false

  
  if (favoriteCount.length >= 4 && name === 'Recent Favorites') {
    return(
      <div className={`title-container ${searchActive ? 'pad' : ''}`}>
        <div className='container-name'>
          <div className='favorites-page'>
            <h3 className='title fade'>{name}</h3>
            <Link to='/favorites'>
              <h3 className='title'>(see all)</h3>
            </Link>
          </div>
        </div>
        <div className='card-container-favorites'>
          {displayMovies}
        </div>
      </div>
    )
  } else {
    return(
      <div className={`title-container ${searchActive ? 'pad' : ''}`}>
        <div className='container-name'>
        {
          favoriteCount.length &&
          <div>
            <h3 style={divStyle}  className='title fade'>{name}</h3>
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

const { string, array } = PropTypes;
TitleContainer.propTypes = {
  name: string,
  movies: array,
  search: string
};

export default TitleContainer;


