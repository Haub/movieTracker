import React, { Component } from 'react';
import VideoPlayer from '../VideoPlayer';
import favTrue from '../../assets/fav-true.svg';
import favFalse from '../../assets/fav-false.svg';
// import { controlFavorites } from '../../actions';
// import { connect } from 'react-redux';
import './TitleCard.css';

export class TitleCard extends Component {
  constructor() {
    super()
    this.state = {
      play: false,
      favorite: false
    }
  }

  mouseEnter = () => {
    this.setState( { play: true })
  }

  mouseLeave = () => {
    this.setState( { play: false })
  }

  toggleFavorite = () => {
    this.setState( { favorite: !this.state.favorite })
    // console.log(this.props)
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
    const { image, video, title, runtime, rating, overview, mpaa } = this.props;
    const { play, favorite } = this.state;
    return(
      <div className='title-card fade' 
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {
          play &&
        <div className='foreground'>
          <div className='info-section'>
            <div>
              <h3 className='movie-title'>{title}</h3>
              <p className='movie-specs'>
                <span className='rating'>{rating}</span>
                <span className='mpaa'>{mpaa.certification}</span>
                {runtime}
              </p>
              <p className='movie-tagline'>{overview.slice(0, 60)}...</p>
            </div>
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
