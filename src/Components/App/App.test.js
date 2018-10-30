/* eslint-disable */
import React from 'react';
import { App } from './index.js';
import { mapStateToProps, mapDispatchToProps } from './index.js';
import { shallow } from 'enzyme';
import { fetchMovies } from '../../actions';

describe('APP', () => {
  let wrapper;
  let mockFetch;
  let mockMovies;
  let mockUser;

  beforeEach(() => {
    mockFetch = jest.fn();
    mockMovies = [];
    mockUser = {};
    wrapper = shallow(
      <App
        fetchMovies = {mockFetch}
        movies={mockMovies}
        user={mockUser}
      />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchMovies on componentDidMount', async () =>{
    let mockMovies = {movies:[]};
    let mockFn = jest.fn().mockImplementation(() => (mockMovies));
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockFn)
      });
    });
    wrapper = shallow(
      <App
        fetchMovies={mockFn}
        movies={[]}
        favorites={[]}
      />);
    await wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

    it('should have default state login set to false and search set to an empty string', () => {
      expect(wrapper.state().login).toEqual(false);
      expect(wrapper.state().search).toEqual('');
    })

    it('should update state when activateLogin is invoked', () => {
      expect(wrapper.state().login).toEqual(false);
      wrapper.instance().activateLogin();
      expect(wrapper.state().login).toEqual(true);
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
  it('should call dispatch when fetchMovies is invoked', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchMovies({title: 'Venom'});
    expect(mockDispatch).toHaveBeenCalled();
  });
})