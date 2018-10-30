import React from 'react';
import TitleContainer from '../TitleContainer';
import { shallow } from 'enzyme';

describe('TITLE CONTAINER', () => {

  it('should match the snapshot', () => {
    const mockMovies = [{title: 'Venom'}, {title: 'Halloween'}]
    const mockName = 'Venom';
    const mockSearch = 'Ve';
    const wrapper = shallow(
      <TitleContainer
        movies={mockMovies}
        name={mockName}
        search={mockSearch}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
})