/* eslint-disable */
import * as API from './API';
import * as fetch from './index.js';


describe('API', () => {
  it('should return a cleaned array of movies', async () => {
    const data = {
        results: [{
        'title': 'Venom',
        'poster_path': './randomAddress',
        'release_date': '18-10-05',
        'overview': 'He eats people and loves snakes...',
        'vote_average': '10' 
      }]
    }

    window.fetch =  jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data)
    }))

    const movie = {
      title: 'Venom',
      favorite: false,
      image: './randomAddress',
      release: '18-10-05',
      overview: 'He eats people and loves snakes...',
      rating: '10' 
    }

    const expected = [ movie, movie, movie, movie]

    const result = await fetch.getMovies()
    expect(result).toEqual(expected)
  })
})