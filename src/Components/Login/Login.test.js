/* eslint-disable */
import React from 'react';
import { Login } from './index.js';
import { shallow, mount } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './index.js';
import * as Actions from '../../actions';

describe('LOGIN', () => {
let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Login />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an initial state with name, email, password, signup, avatar, and error', () => {
    const expected = {"avatar": "", "email": "", "error": "", "name": "", "password": "", "signUp": false}
    expect(wrapper.state()).toEqual(expected);
  });

  it('calls handleSubmit onSubmit of the form', () => {
    wrapper = mount(<Login />)
    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().forceUpdate();
    wrapper.find('form').simulate('submit', mockEvent)
    expect(spy).toHaveBeenCalled()
  })

  it('should call sign up with the correct params if signUp is true', async () => {
    wrapper = mount(<Login />)
    // const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().forceUpdate();
    wrapper.find('form').simulate('submit', mockEvent)
    const name = 'graham' 
    const email = 'papag@gmail.com'
    const password = 'papag'
    const fetchUser = jest.fn()
    const mockDispatch = jest.fn()
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.fetchUser(name, email, password);
    await wrapper.instance().handleSubmit(mockEvent)
    expect(Actions.fetchUser).toHaveBeenCalled()
  })
})

describe('mapDispatchToProps', () => {
  it('should call fetchUser when logged in', () => {
    const mockDispatch = jest.fn();
    const name = 'graham';
    const email = 'graham@hotmail.com'
    const password = 'poop'
    const expected =  Actions.fetchUser(name, email, password);
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.fetchUser(name, email, password);
    expect(mockDispatch).toHaveBeenCalled();
  })
})

describe('mapStateToProps', () => {
  it('should parse the user from state', () => {
    const mockUser = {id: 2, name: 'Graham', email: 'graham@aol.com', password: '123', favorites: ['Barbie Movie']};
    
    const mockState = {
      user: mockUser,
      userReducer: 'LOGIN_USER'
    }
    const expected = mockUser

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps.user).toEqual(expected)
  })
})