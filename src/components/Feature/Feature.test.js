import React from 'react';
import { shallow } from 'enzyme';
import { Feature} from './index.js';

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

})

describe('mapDispatchToProps', () => {

})