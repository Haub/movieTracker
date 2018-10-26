import React, { Component } from 'react';
import VideoPlayer from '../VideoPlayer';
import favTrue from '../../assets/fav-true.svg'
import favFalse from '../../assets/fav-false.svg'

import './TitleCard.css';
import { getMovies } from '../../utils';
export class TitleCard extends Component {
  constructor() {
    super()
    this.state = {
      play: false,
      favorite: false
    }
  }

  mouseEnter = () => {
    console.log('mouse enter')
    this.setState( { play: true })
  }

  mouseLeave = () => {
      console.log('mouse leave')
      this.setState( { play: false })
  }

  toggleFavorite = () => {
    this.setState( { favorite: !this.state.favorite })
  }

  render() {
    const { image, video, title, runtime, rating, overview, mpaa } = this.props;
    const { play, favorite } = this.state;
    return(
      <div className='title-card' 
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <div className='foreground'>
          <div className='info-section'>
            <h4 className='movie-title'>{title}</h4>
            <p className='movie-tagline'>{overview.slice(0, 60)}...</p>
            <p className='movie-tagline'>{runtime}</p>
            <p className='movie-tagline'>{mpaa.certification}</p>

          </div>
          <div className='favorite-section'>
            <img className='favorite-btn'
              onClick={this.toggleFavorite}
              src={favorite ? favTrue : favFalse}
              alt='favorite button'
            />
          </div>
        </div>
        <VideoPlayer image={image}
          url={video[0].key}
          play={play}
        />
      </div>
    )
  } 
}