import { key } from './APIKey';
import { fetchData, addFavorite, removeFavorite } from './API';

export const getMovies = async () => {
  let results = []
  let page = 1
  while (page <= 2) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}&region=US`
    const response = await fetchData(url)
    const unresolvedPromises = response.results.map(async movie => {
      const response = await getMovieTrailers(movie.id)
      return {
        title: movie.title,
        favorite: false,
        id: movie.id,
        poster: movie.poster_path,
        image: movie.backdrop_path,
        release: movie.release_date,
        overview: movie.overview,
        rating: movie.vote_average,
        mpaa: response.releases.countries.find(co => co.iso_3166_1 === 'US'),
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
    (movie.video.length && movie.image && movie.mpaa)
  )
  return cleanedResults;
}

export const getMovieTrailers = async (id) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=budget,imdb_id,production_companies,release_date,revenue,runtime,tagline,videos,releases`
    const response = await fetchData(url);
    return response
  } catch(error) {
    throw new Error()
  }
}

export const addUser = async (name, email, password) => {
  try {
    const url = 'http://localhost:3000/api/users/new'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({name: name, email: email, password: password}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const result = await response.json();
    const favorites = await getFavorites(result.id)
    const user = {id: result.id, name, password, email, favorites}
    return user
  } catch(error) {
    throw new Error()
  }
}

export const getUser = async (email, password) => {
  const url = 'http://localhost:3000/api/users'
  const response = await fetchData(url);
  const matchingUser = response.data.find(user => user.email === email && user.password === password)
  if(matchingUser) {
    const favorites = await getFavorites(matchingUser.id)
    const user = {...matchingUser, favorites}
    return user
  } else {
    throw new Error()
  }
} 

export const getFavorites = async (id) => {
  const url = `http://localhost:3000/api/users/${id}/favorites`
  const response = await fetchData(url)
  return response.data 
}

export const checkFavorites = async (movie) => {
  const favorites = await getFavorites(movie.user_id)
  const favoriteId = favorites.map(favorite => favorite.movie_id)
  if (favoriteId.includes(movie.movie_id)){
    const url = `http://localhost:3000/api/users/${movie.user_id}/favorites/${movie.movie_id}`
    console.log(url)
    await removeFavorite(movie, url)
  } else {
    const url = `http://localhost:3000/api/users/favorites/new`
    await addFavorite(movie, url)
  }
  const newFavorites = await getFavorites(movie.user_id)
  return newFavorites
}

