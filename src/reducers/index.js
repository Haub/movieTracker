import { moviesReducer } from './moviesReducer';
import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  movies: moviesReducer,
  user: userReducer
})