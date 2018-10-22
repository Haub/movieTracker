import React, { Component } from 'react';
import { getMovies } from '../Utils/API'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      login: false,
      data: []
    }
  }

  async componentDidMount() {
    const data = await getMovies();
    this.setState( { data })
  }


  render() {
    return (
      <div className="App">
        HEY
      </div>
    );
  }
}

export default App;
