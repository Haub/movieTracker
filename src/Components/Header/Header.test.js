import React from 'react';
import { Header } from './index.js';
import { shallow } from 'enzyme';
import { loginUser } from '../../actions';
import { mapDispatchToProps } from './index.js';

describe('HEADER', () => {
  let mockUser;
  let mockActivateLogin;
  let mockSearchMovies;
  
  beforeEach(() => {
    mockUser = {id: 2, name: 'Graham', email: 'graham@aol.com', password: '123', favorites: ['Venom']};
    mockActivateLogin = jest.fn();
    mockSearchMovies = jest.fn();
  })

  
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <Header 
        user={mockUser}
        activateLogin={mockActivateLogin}
        searchMovies={mockSearchMovies}
    />);
    expect(wrapper).toMatchSnapshot();
  });
})

describe('mapDispatchToProps', () => {
  it('should call loginUser when logOutUser is invoked', () => {
    const mockDispatch = jest.fn();
    const user = {id: 2, name: 'Graham', email: 'graham@aol.com', password: '123', favorites: ['Venom']};
    const expected = {"type": "LOGIN_USER", "user": {"email": "graham@aol.com", "favorites": ["Venom"], "id": 2, "name": "Graham", "password": "123"}};
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.loginUser({id: 2, name: 'Graham', email: 'graham@aol.com', password: '123', favorites: ['Venom']});
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  })
})