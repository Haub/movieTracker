import { moviesReducer } from './moviesReducer';
import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { loadingReducer } from './loadingReducer';
import * as actions from '../actions';

describe('moviesReducer', () => {
  
  it('should return the initial state', () => {
    const expected = [];
    const result = moviesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should update state with movies when addMovies is dispatched', () => {
    const initialState = [];
    const movies = [{title: 'Venom'}, {title: 'Incredibles 2'}];
    const expected = [...expected];
    const result = moviesReducer(initialState, actions.addMovies(movies));
    expect(result).toEqual(expected);

  })
})

describe('userReducer', () => {
  it('should return the initialState', () => {
    const expected = {};
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should update with a new user when addUser is dispatched', () => {
    const initialState = {};
    const newUser = {name: 'Sam', email: 'sam@gmail.com', password: 'abcd', id: '10'};
    const result = userReducer(initialState, actions.addUser(newUser));
    expect(result).toEqual(newUser);
  });



})
