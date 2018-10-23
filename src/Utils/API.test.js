import * as API from './API';


describe('API', () => {
  it('should be return a cleaned array of movies', async () => {
    const data = [{
      'movie.title': 'Venom',
      'movie.poster_path': './randomAddress',
      'movie.release_date': '18-10-05',
      'movie.overview': 'He eats people and loves snakes...',
      'movie.vote_average': '10' 
    }]

    window.fetch =  jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data)
    }))

    const expected = [{
      title: 'Venom',
      favorite: false,
      image: './randomAddress',
      release: '18-10-05',
      overview: 'He eats people and loves snakes...',
      rating: '10' 
    }]

    const result = await API.getMovies()

    expect(result).toEqual(expected)

  })
})