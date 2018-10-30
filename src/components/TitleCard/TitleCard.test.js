import React from 'react';
import { shallow } from 'enzyme';
import { TitleCard } from './index.js';
import { mapStateToProps, mapDispatchToProps } from './index.js';
import * as Actions from '../../actions';


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
    const movie_id = 424139
    const overview = "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago."
    const poster_path = "/bXs0zkv2iGVViZEy78teg2ycDBm.jpg"
    const release_date = "2018-10-19"
    const title = "Halloween"
    const user_id = 1
    const vote_average = 6.7
    const expected =  Actions.toggleFavorite(movie_id, overview, poster_path, release_date, title, user_id, vote_average);
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.controlFavorites(movie_id, overview, poster_path, release_date, title, user_id, vote_average);
    expect(mockDispatch).toHaveBeenCalled();
  })

  describe('mapStateToProps', () => {
    it('should parse the user from state', () => {
      const mockUser = {id: 2, name: 'Graham', email: 'graham@aol.com', password: '123', favorites: ['Venom']};
      
      const mockState = {
        user: mockUser,
        userReducer: 'LOGIN_USER'
      }
      const expected = mockUser

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps.user).toEqual(expected)
    })
  })
  
})

