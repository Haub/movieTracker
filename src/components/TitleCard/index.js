import React, { Component } from 'react';
import VideoPlayer from '../VideoPlayer';
import favTrue from '../../assets/fav-true.svg';
import favFalse from '../../assets/fav-false.svg';
import { connect } from 'react-redux';
import { controlFavorites } from '../../actions';
import { NavLink } from 'react-router-dom';

import './TitleCard.css';

class TitleCard extends Component {
  constructor() {
    super()
    this.state = {
      play: false,
    }
  }

  mouseEnter = () => {
    this.setState( { play: true })
  }

  mouseLeave = () => {
    this.setState( { play: false })
  }

  toggleFavorite = () => {
    if (!this.props.user.id) {
      alert('You must sign in first to add favorites.')
      return
    }
    const movie = {
      movie_id: this.props.id,
      user_id: this.props.user.id,
      title: this.props.title,
      poster_path: this.props.poster,
      release_date: this.props.release,
      vote_average: this.props.rating,
      overview: this.props.overview,
    }
    this.props.controlFavorites(movie)
  }

  render() {
    const { image, video, title, runtime, rating, overview, mpaa, favorite, id } = this.props;
    const { play } = this.state;
    
    return(
      <div className='title-card fade' 
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {
          play &&
        <div className='foreground'>
            <div className='info-section'>
              <NavLink to={`/${id}`} className='title-page-link'>
                <div>
                  <h3 className='movie-title'>{title}</h3>
                  <p className='movie-specs'>
                    <span className='rating'>{rating}</span>
                    <span className='mpaa'>{mpaa.certification}</span>
                    {runtime}
                  </p>
                  <p className='movie-tagline'>{overview.slice(0, 60)}...</p>
                </div>
              </NavLink>
            </div>
          <div className='favorite-section'>
            <img className='favorite-btn'
              onClick={this.toggleFavorite}
              src={favorite ? favTrue : favFalse}
              alt='favorite button'
            />
          </div>
        </div>
        }
        {
          !play &&
          <div className='foreground'>
            <div className='info-section'>
              <div></div>
            </div>
            <div className='favorite-section'>
              {
                favorite &&
              <img className='favorite-btn'
                onClick={this.toggleFavorite}
                src={favTrue}
                alt='favorite button'
              />
              }
            </div>
          </div>
        }
        <VideoPlayer image={image}
          url={video[0].key}
          play={play}
        />
      </div> 
    )
  } 
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  controlFavorites: (movie) => dispatch(controlFavorites(movie))
})


export default connect (mapStateToProps, mapDispatchToProps)(TitleCard);
