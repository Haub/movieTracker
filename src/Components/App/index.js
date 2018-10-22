import React, { Component } from 'react';
import { fetchMovies } from '../Utils/API.js';
import './App.css';

class App extends Component {
 constructor() {
   super()
 }

 componentDidMount () {
   fetchMovies();
 }

 render() {
   return (
     <div className="App">

     </div>
   );
 }
}

export default App;
