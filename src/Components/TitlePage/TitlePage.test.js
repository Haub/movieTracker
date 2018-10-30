/* eslint-disable */
import React from 'react';
import { TitlePage } from './index';
import { shallow } from 'enzyme';

describe('TitlePage', () => {
let wrapper;
let movie;
  
  beforeEach(() => {
    wrapper = shallow(<TitlePage movie={{movie}} />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})