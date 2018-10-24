import { key } from './APIKey';

export const fetchData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getMovies = async () => {
  let results = []
  let count = 0
  for (let i = 1; i < 3; i++) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${i}&region=US`
    const response = await fetchData(url)
    console.log(response)
    const result = response.results.map(movie => {
      // const response = await getMovieTrailers(movie.id)
      return {
        title: movie.title,
        favorite: false,
        image: movie.poster_path,
        release: movie.release_date,
        overview: movie.overview,
        rating: movie.vote_average,
        // budget: response.budget,
        // genres: response.genres,
        // homepage: response.homepage,
        // imdb: response.imdb_id,
        // language: response.spoken_languages.name,
        // video: response.videos.results.key,
        // revenue: response.revenue,
        // runtime: response.runtime,
        // productionCompany: response.production_companies
      }
    })
    // const result =  await Promise.all(unresolvedPromises);
    results.push(...result)
  }
  return results;
}

export const getMovieTrailers = async (id) => {

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=budget,imdb_id,
  production_companies,release_date,revenue,runtime,tagline,videos`
  const response = await fetchData(url)
  return response
}
// https://api.themoviedb.org/3/movie/157336?api_key=41385c65fcaba300518fe2442257db12&append_to_response=videos,images

// https://api.themoviedb.org/3/movie/157336?api_key=41385c65fcaba300518fe2442257db12&append_to_response=budget,imdb_id,production_companies,release_date,revenue,runtime,tagline,videos


// https://api.themoviedb.org/3/movie/popular?api_key=41385c65fcaba300518fe2442257db12&language=en-US&page=1&region=US

// 157336