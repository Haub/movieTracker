import React from 'react';
import { shallow } from 'enzyme';
import { TitleCard } from './index.js';
import { mapStateToProps, mapDispatchToProps } from './index.js';


describe('TITLE CARD', () => {
  let controlFavorites;
  let mockUser;
  let wrapper;
  
  beforeEach(() => {
    controlFavorites = jest.fn();
    window.alert = jest.fn();
    mockUser = {id: 2, name: 'Graham', email: 'graham@aol.com', password: '123', favorites: ['Venom']};
    wrapper = shallow(
      <TitleCard 
        user={mockUser}
        video={[{key: true}, {key: true}] } 
        mpaa={{certification: 'true'}} 
        overview={'hello'}
        controlFavorites={controlFavorites}
      />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an initial state with a key of play set to false', () => {
    expect(wrapper.state().play).toEqual(false);
  });

  it('should set the state of play to true when mouseEnter is invoked', () => {
    expect(wrapper.state().play).toEqual(false);
    wrapper.instance().mouseEnter();
    expect(wrapper.state().play).toEqual(true);
  });

  it('should set the state of play to false when mouseLeave is invoked', () => {
    wrapper.instance().mouseLeave();
    expect(wrapper.state().play).toEqual(false);
  })

  it('should send an alert if no user id exists', () => {
    mockUser = {};
    wrapper = shallow(
      <TitleCard 
        user={mockUser}
        video={[{key: true}, {key: true}] } 
        mpaa={{certification: 'true'}} 
        overview={'hello'}
        controlFavorites={controlFavorites}
      />);
    wrapper.instance().toggleFavorite();
    expect(window.alert).toHaveBeenCalled();

  })
})

describe('mapStateToProps', () => {
  it('should return a user object', () => {
    const mockState = {
      user: {id: 2, name: 'Graham', email: 'graham@aol.com', password: '123', favorites: ['Venom']}
    }
    const expected = {
      user: {id: 2, name: 'Graham', email: 'graham@aol.com', password: '123', favorites: ['Venom']}
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
})

describe('mapDispatchToProps', () => {
  it('calls dispatch with a controlFavorites action when toggleFavorites is invoked', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.toggleFavorite();
    expect(mockDispatch).toHaveBeenCalled();
  })
  
})

