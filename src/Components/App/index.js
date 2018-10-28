import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Header from '../Header';
import TitleContainer from '../TitleContainer';
import Login from '../Login';
import { fetchMovies } from '../../actions/';
import { TitlePage } from '../../components/TitlePage';
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
        <Route exact path='/' render={() => 
          (<TitleContainer movies={movies} user={user}/>)
        }/>
        <Route exact path='/:id' render={({match}) => {
          const { id } = match.params;
          const movie = movies.find(movie => movie.id === parseInt(id, 10))
          if (movie) {
            return <TitlePage movie={movie} />
          }
        }} />
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
