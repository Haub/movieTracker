
import * as actions from './index.js';

describe('actions', () => {
  it('should have a type of CONTENT_STATUS', () => {
    const status = '';
    const expected = {
      type: 'CONTENT_STATUS',
      status
    }
    const result = actions.contentStatus(status);
    expect(result).toEqual(expected);
  });

  it('should have a type of ADD_MOVIES', () => {
    const movies = [{}];
    const expected = {
      type: 'ADD_MOVIES',
      movies
    }
    const result = actions.addMovies(movies);
    expect(result).toEqual(expected);
  });

  it('should have a type of LOGIN_USER', () => {
    const user = {name: 'Simon', email: 'simon@gmail.com', password: '123456', avatar: 'http://www.image.com'}
    const expected = {
      type: 'LOGIN_USER',
      user
    }
    const result = actions.loginUser(user);
    expect(result).toEqual(expected);
  })
})