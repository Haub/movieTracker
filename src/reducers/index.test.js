/* eslint-disable */
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
    const expected = [...movies];
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
    const user = {name: 'Sam', email: 'sam@gmail.com', password: 'abcd', id: '10'};
    const expected = {...user};
    const result = userReducer(initialState, actions.loginUser(user));
    expect(result).toEqual(expected);
  });
})

describe('loadingReducer', () => {
  it('should return the initialState', () => {
    const expected = '';
    const result = loadingReducer(undefined, '');
    expect(result).toEqual(expected);
  })

  it('should update with a new status when loadingReducer is dispatched', () => {
    const initialState = '';
    const status = 'loading';
    const expected = 'loading';
    const result = loadingReducer(initialState, actions.contentStatus(status));
    expect(result).toEqual(expected);
  });
})

