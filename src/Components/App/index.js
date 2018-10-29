import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Header from '../Header';
import TitleContainer from '../TitleContainer';
import Login from '../Login';
import { fetchMovies } from '../../actions/';
import { TitlePage } from '../../components/TitlePage';
import Feature from '../Feature';

import './App.css';

export class App extends Component {
  constructor() {
    super() 
    this.state = {
      login: false,
      search: ''
    }
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  activateLogin = () => {
    this.setState( { login: !this.state.login } )
  }

  searchMovies = (search) => {
    this.setState( { search } )
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
    const { movies, user } = this.props;
    const { login, search } = this.state;
    const favorites =  movies.filter(movie => movie.favorite)
    
    return (
      <div className="App">
        {
          login &&
          <Login activateLogin={this.activateLogin}/>
        }
        <div className={`main-view ${login ? 'blur' : ''}`}>
          <Header user={user} activateLogin={this.activateLogin} 
            searchMovies={this.searchMovies}/>
          <Feature />
          <Route exact path='/favorites' render={() => 
            (<TitleContainer movies={favorites} user={user} name={'My Favorites'}/>)
          }/>
          {
            favorites.length &&
            <TitleContainer movies={favorites.slice(0, 4)} user={user} name={'Recent Favorites'}/>
          }
          <Route exact path='/' render={() => 
            (<TitleContainer movies={movies} 
              user={user} 
              name={'Popular Movies'}
              search={search}
          />)
          }/>
          <Route exact path='/:id' render={({match}) => {
            const { id } = match.params;
            const movie = movies.find(movie => movie.id === parseInt(id, 10))
            if (movie) {
              return <TitlePage movie={movie} />
            }
          }} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies())
})

export default withRouter(connect (mapStateToProps, mapDispatchToProps)(App));
