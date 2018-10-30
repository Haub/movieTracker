import React from 'react';
import { shallow, mount } from 'enzyme';
import { Feature} from './index.js';
import { mapStateToProps, mapDispatchToProps } from './index.js';
import * as Actions from '../../actions';


describe('FEATURE', () => {
  let wrapper;
  let mockMovies;

  beforeEach(() => {
    mockMovies = [];
    wrapper = shallow(<Feature movies={mockMovies} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have initial state of play set to false', () => {
    expect(wrapper.state().play).toEqual(true);
  });
   
  it('should set the state of play to false when componentWillUnmount is invoked', () => {
    expect(wrapper.state().play).toEqual(true);
    wrapper.instance().componentWillUnmount();
    expect(wrapper.state().play).toEqual(false);
  });

  it('should call newFeature when componentDidMount is called', () => {
    const wrapper = mount(<Feature movies={mockMovies} />)
    const spy = jest.spyOn(wrapper.instance(), 'newFeature');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
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