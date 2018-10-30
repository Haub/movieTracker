import React from 'react';
import { shallow } from 'enzyme';
import { Feature} from './index.js';
import { mapStateToProps, mapDispatchToProps } from './index.js';
import * as Actions from '../../actions';


describe('FEATURE', () => {
  it('should match the snapshot', () => {
    const mockMovies = [];
    const wrapper = shallow(<Feature movies={mockMovies} />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should have initial state of play set to false', () => {
    const mockMovies = [];    
    const wrapper = shallow(<Feature movies={mockMovies} />) 
    expect(wrapper.state().play).toEqual(false);
  })
   
})

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
    const mockFetchMovies = jest.fn();
    const movie = [{title: 'Venom'}];
    const action = Actions.controlFavorites(movie);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.controlFavorites({title: 'Venom'});
    expect(mockDispatch).toHaveBeenCalled();
  });
})