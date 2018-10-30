import React from 'react';
import { Header } from './index.js';
import { shallow } from 'enzyme';
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
    const wrapper = shallow(<Header user={{ id: 2 }} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot with props', () => {
    const wrapper = shallow(
      <Header 
        user={mockUser}
        activateLogin={mockActivateLogin}
        searchMovies={mockSearchMovies}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls handleSearch when input is changed', () => {
    const wrapper = shallow(
      <Header 
        searchMovies={mockSearchMovies} 
        user={{ id: 2, name: 'Graham', email: 'graham@aol.com', password: '123', favorites: ['Venom'] }}
      />);
    const spy = jest.spyOn(wrapper.instance(), 'handleSearch');
    wrapper.instance().forceUpdate();
    const mockEvent = { target: {value: 'movie'}};
    wrapper.find('.search-field').simulate('change', mockEvent);
    expect(spy).toHaveBeenCalled();

  })
})

describe('mapDispatchToProps', () => {
  it('should call loginUser when logOutUser is invoked', () => {
    const mockDispatch = jest.fn();
    const expected = {"type": "LOGIN_USER", "user": {"email": "graham@aol.com", "favorites": ["Venom"], "id": 2, "name": "Graham", "password": "123"}};
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.loginUser({id: 2, name: 'Graham', email: 'graham@aol.com', password: '123', favorites: ['Venom']});
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  })

})