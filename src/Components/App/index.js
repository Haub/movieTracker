import React, { Component } from 'react';
import { getMovies } from '../../Utils/';
import TitleContainer from '../TitleContainer';
import { connect } from 'react-redux';
import { addMovies } from '../../actions/addMovies';
import Login from '../Login';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      login: false
    }
  }

  async componentDidMount() {
    const movieData = await getMovies();
    this.props.addMovies(movieData);
  }


  render() {
    return (
      <div className="App">
        <Login />
        <TitleContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect (null, mapDispatchToProps)(App);
