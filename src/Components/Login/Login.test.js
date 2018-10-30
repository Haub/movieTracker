import React from 'react';
import { Login } from './index.js';
import { shallow } from 'enzyme';

describe('LOGIN', () => {
let wrapper;
  
  beforeEach(() => {
    const wrapper = shallow(<Login />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an initial state with name, email, password, signup, avatar, and error', () => {
    const wrapper = shallow(<Login />);
    const expected = {"avatar": "", "email": "", "error": "", "name": "", "password": "", "signUp": false}
    expect(wrapper.state()).toEqual(expected);
  });

})