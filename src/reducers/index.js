import { moviesReducer } from './moviesReducer';
import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer
})