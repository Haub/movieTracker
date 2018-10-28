import * as actions from './index';
import { movieObject, movieTrailer } from './mockData';
import { enzyme } from 'enzyme';

describe('HELPER', () => {

  it('should get array of movies when getMovies is invoked', async() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(movieObject)
    }))
    actions.getMovieTrailers = jest.fn(() => Promise.resolve(movieTrailer)
    );
    const expected = [];
    const result = await actions.getMovies();
    expect(window.fetch).toEqual(movieObject);
  })

 


})