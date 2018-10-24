import { moviesReducer } from './moviesReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  movies: moviesReducer
})