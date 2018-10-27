import React, { Component } from 'react';
import { fetchMovies } from '../../actions/';
import Header from '../Header';

import TitleContainer from '../TitleContainer';
import { connect } from 'react-redux';

import Login from '../Login';
import './App.css';

class App extends Component {
  
  async componentDidMount() {
    this.props.fetchMovies();
  }


  render() {
    const { movies, user } = this.props;
    return (
      <div className="App">
        <Header user={user} />
          <Login />  
        <TitleContainer />
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

export default connect (mapStateToProps, mapDispatchToProps)(App);