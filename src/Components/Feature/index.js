import React, { Component } from 'react';
import { connect } from 'react-redux';
import { controlFavorites } from '../../actions';
import { NavLink } from 'react-router-dom';

import './Feature.css'

export class Feature extends Component {
  constructor() {
    super()
    this.state = {
      play: true,
      feature: 0
    }
  }

  componentDidMount() {
    this.newFeature()
  }

  componentWillUnmount() {
    this.setState( { play: false } )
  }

  newFeature = () => {
    if (this.state.play) {
      const randomNumber = Math.round(Math.random() * 40)
      this.setState({feature: randomNumber})
      setInterval(() => this.newFeature(), 60000)
    }
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
      const { video, title, runtime, rating, overview, mpaa, id } = movies[this.state.feature];
      return(
        <div className='feature-card fade'>
          <div className='feature-foreground'>
            <NavLink to={`/${id}`} className='feature-title-page-link'>
              <h2 className='feature-movie-title'>{title}</h2>
              <p className='feature-movie-specs'>
                <span className='feature-rating'>{rating}</span>
                <span className='feature-mpaa'>{mpaa.certification}</span>
                {runtime}
              </p>
              <p className='feature-movie-tagline'>{overview.slice(0, 150)}...</p>
            </NavLink>
          </div>
            <div className="super-iframe-holder">
              <iframe title='feature-player' 
                src={`https://www.youtube.com/embed/${video[0].key}?autoplay=1&mute=1&modestbranding=1&start=5&controls=0`} 
                frameBorder="0" 
              >
              </iframe>
            </div>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  controlFavorites: (movie) => dispatch(controlFavorites(movie))
})


export default connect (mapStateToProps, mapDispatchToProps)(Feature);

