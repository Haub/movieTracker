/* eslint-disable */
import * as actions from './index';
import { movieObject, movieTrailer } from './mockData';
import { enzyme } from 'enzyme';
import { getMovies, getMovieTrailers, addUser, getUser, getFavorites, checkFavorites } from './index.js';
import { fetchData, addFavorite, removeFavorite } from './API';
import { key } from './APIKey';

describe('HELPER', () => {
  describe('getMovies', () => { 
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
    });
  })

  describe('getMovieTrailers', () => {
    
    it('should call getMovieTrailers with the correct parameters', async() => {
      const expected = `https://api.themoviedb.org/3/movie/346985?api_key=${key}&append_to_response=budget,imdb_id,production_companies,release_date,revenue,runtime,tagline,videos,releases`;
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve()
      }));
      await fetchData(expected);
      expect(window.fetch).toHaveBeenCalledWith(expected); 
    });

    it('should return movie trailers from getMovieTrailers', () => {
      

    });

  describe('addUser', () => {

  })

  })

 


})