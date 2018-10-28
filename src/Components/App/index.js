import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Header from '../Header';
import TitleContainer from '../TitleContainer';
import Login from '../Login';

import { fetchMovies } from '../../actions/';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchMovies();
  }


  render() {
    const { movies, user } = this.props;
    return (
      <div className="App">
        <Route exact path='/login' component={Login}/>
        <Header user={user} />
        <Route exact path='/' component={Login}/>
        <TitleContainer movies={movies} />
        <Route exact path='/favorites' render={() => {
          const favorites =  movies.filter(movie => movie.favorite)
          return <TitleContainer favorites={favorites} />
        }}/>
        <Route exact path='/' render={() => {
          return <TitleContainer movies={movies} />
        }}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies())
})

export default connect (mapStateToProps, mapDispatchToProps)(App);
