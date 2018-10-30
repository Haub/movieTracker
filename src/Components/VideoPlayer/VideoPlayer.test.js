import React from 'react';
import { VideoPlayer } from './index';
import { shallow } from 'enzyme';

describe('VideoPlayer', () => {
let wrapper;
let play;
let url;
let image;
let feature;
  
  beforeEach(() => {
    wrapper = shallow(<VideoPlayer play={play} url={url} image={image} feature={feature} />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})