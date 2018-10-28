import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

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
    const favorites =  movies.filter(movie => movie.favorite)
    return (
      <div className="App">
        <Route path='/login' component={Login}/>
        <Header user={user} />
        <Route exact path='/favorites' render={() => 
          (<TitleContainer movies={favorites} user={user} />)
        }/>
        <TitleContainer movies={movies} user={user}/>
      
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

export default withRouter(connect (mapStateToProps, mapDispatchToProps)(App));
