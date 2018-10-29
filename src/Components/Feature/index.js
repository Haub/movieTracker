import React, { Component } from 'react';
import favTrue from '../../assets/fav-true.svg';
import favFalse from '../../assets/fav-false.svg';
import { connect } from 'react-redux';
import { controlFavorites } from '../../actions';
import { NavLink } from 'react-router-dom';

import './Feature.css'

class Feature extends Component {
  constructor() {
    super()
    this.state = {
      play: false,
    }
  }

  mouseEnter = () => {
    this.setState( { play: true } )
  }

  mouseLeave = () => {
    this.setState( { play: false } )
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
    if (this.props.movies.length) {
      const { movies } = this.props;
      const randomNumber = Math.round(Math.random() * movies.length)
      const { image, video, title, runtime, rating, overview, mpaa, favorite, id } = movies[randomNumber];
  
      return(
        <div className='feature-card'>
          <div className='feature-foreground'>
          </div>
            <div className="super-iframe-holder">
              <iframe title='feature-player' 
                src={`https://www.youtube.com/embed/${video[0].key}?autoplay=1&mute=1&modestbranding=1&start=5&controls=0`} 
                frameBorder="0" allowFullScreen>
              </iframe>
            </div>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  controlFavorites: (movie) => dispatch(controlFavorites(movie))
})


export default connect (mapStateToProps, mapDispatchToProps)(Feature);

