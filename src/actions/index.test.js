
import { contentStatus, addMovies, loginUser, toggleFavorite } from './index.js';
import { enzyme } from 'enzyme';

describe('actions', () => {
  it('should have a type of FETCH_MOVIES', () => {

  })

  it('should have a type of FETCH_USER', () => {

  })

  it('should have a type of CONTROL_FAVORITES', () => {

  })

  it('should have a type of CONTENT_STATUS', () => {
    const status = '';
    const expected = {
      type: 'CONTENT_STATUS',
      status
    }
    const result = contentStatus(status);
    expect(result).toEqual(expected);
  });

  it('should have a type of ADD_MOVIES', () => {
    const movies = [{}];
    const expected = {
      type: 'ADD_MOVIES',
      movies
    }
    const result = addMovies(movies);
    expect(result).toEqual(expected);
  });

  it('should have a type of LOGIN_USER', () => {
    const user = {name: 'Simon', email: 'simon@gmail.com', password: '123456', avatar: 'http://www.image.com'}
    const expected = {
      type: 'LOGIN_USER',
      user
    }
    const result = loginUser(user);
    expect(result).toEqual(expected);
  })

  it('should have a type of toggleFavorite', () => {
    const favorites = [];
    const expected = {
      type: 'TOGGLE_FAVORITE',
      favorites
    }
    const result = toggleFavorite(favorites);
    expect(result).toEqual(expected);
  })
})