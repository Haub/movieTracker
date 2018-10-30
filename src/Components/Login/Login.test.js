import React from 'react';
import { Login } from './index.js';
import { shallow } from 'enzyme';
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

  // it('should call handleSubmit on form click', () => {
  //   const handleSubmit = jest.fn()
  //   wrapper.find('.login-form').simulate('submit');
  //   expect(handleSubmit).toBeCalled();
  // })
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

  it('should toggle favorite', () => {
    
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