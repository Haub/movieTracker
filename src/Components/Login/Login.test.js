import React from 'react';
import { Login } from './index.js';
import { shallow } from 'enzyme';

describe('LOGIN', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

})