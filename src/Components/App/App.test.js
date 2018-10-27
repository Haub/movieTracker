import React from 'react';
import ReactDOM from 'react-dom';
import App, { mapStateToProps, mapDispatchToProps } from './index.js';
import { shallow, enzyme } from 'enzyme';
import { fetchMovies } from '../../actions';



describe('APP', () => {
  it('should call fetchMovies on componentDidMount', () => {
    let mockFetch = jest.fn().mockImplementation(() => (movies));
    wrapper = shallow(
      <App
        fetchMovies = {mockFetch}
      />
    )
    let movies = [];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(movies)
      });
    });

    })
});

describe('mapStateToProps', () => {
  it('should have access to movies and current user', () => {
    const mockStore = {
      movies: [],
      user: {}
    }
    const expected = {...mockStore};
    const result = mapStateToProps(mockStore);
    expect(result).toEqual(expected);
  });
})

describe('mapDispatchToProps', () => {
  it('should display the movies when fetchMovies is invoked', () => {
    const mockDispatch = jest.fn();
    const movies = [];
    const action = fetchMovies(movies);
    const props = mapDispatchToProps(mockDispatch);
    props.fetchMovies([]);
    expect(mockDispatch).toHaveBeenCalledWith(action);
  });
})