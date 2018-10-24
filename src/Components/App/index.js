import React, { Component } from 'react';
import { getMovies } from '../../Utils/API';
import TitleContainer from '../TitleContainer';
import { connect } from 'react-redux';
import { addMovies } from '../../actions/addMovies';

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
    // console.log(this.state.data[0])
    return (
      <div className="App">
        HEY
        <TitleContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect (null, mapDispatchToProps)(App);
