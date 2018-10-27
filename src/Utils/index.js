import { key } from './APIKey';
import { fetchData } from './API'

export const getMovies = async () => {
  let results = []
  let page = 1
  while (page <= 2) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}&region=US`
    const response = await fetchData(url)
    const unresolvedPromises = response.results.map(async movie => {
      await new Promise(resolve => { setTimeout(resolve, 200) })
      const response = await getMovieTrailers(movie.id)
      return {
        title: movie.title,
        favorite: false,
        poster: movie.poster_path,
        image: movie.backdrop_path,
        release: movie.release_date,
        overview: movie.overview,
        rating: movie.vote_average,
        mpaa: response.releases.countries.find(co => co.iso_3166_1 === 'US'),
        tagline: response.tagline,
        budget: response.budget,
        genres: response.genres,
        homepage: response.homepage,
        imdb: response.imdb_id,
        language: response.spoken_languages.name,
        video: response.videos.results,
        revenue: response.revenue,
        runtime: `${Math.floor(response.runtime / 60)}h${response.runtime % 60}m`,
        productionCompany: response.production_companies
      }
    })
    const result =  await Promise.all(unresolvedPromises);
    results.push(...result)
    page++
  }
  const cleanedResults = results.filter(movie => 
    (movie.video.length && movie.image && movie.mpaa.certification)
  )
  return cleanedResults;
}

export const getMovieTrailers = async (id) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=budget,imdb_id,production_companies,release_date,revenue,runtime,tagline,videos,releases`
    const response = await fetchData(url);
    return response
  } catch(error) {
    throw new Error(error.message)
  }
}

export const addUser = async (name, email, password) => {
  const url = 'http://localhost:3000/api/users/new';
  const response = await fetchPost(url, name, email, password);
  return response
}

export const getUser = async (email, password) => {
  const url = 'http://localhost:3000/api/users'
  const response = await fetchData(url);
  const matchingUser = response.data.find(user => user.email === email && user.password === password)
  return matchingUser ? matchingUser : window.alert('Email and password do not match')
} 





