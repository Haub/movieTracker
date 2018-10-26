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
    return (
      <div className="App">
        <Header />
          <Login />  
        <TitleContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies())
})

export default connect (null, mapDispatchToProps)(App);
