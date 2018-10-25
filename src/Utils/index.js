import { key } from './APIKey';
import { fetchData } from './API'

export const getMovies = async () => {
  let results = []
  let page = 1
  while (page <= 5) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}&region=US`
    const response = await fetchData(url)
    const unresolvedPromises = response.results.map(async movie => {
      await new Promise(resolve => {
        setTimeout(resolve, 200)
      })
      const response = await getMovieTrailers(movie.id)
      return {
        title: movie.title,
        favorite: false,
        image: movie.poster_path,
        background: movie.backdrop_path,
        release: movie.release_date,
        overview: movie.overview,
        rating: movie.vote_average,
        budget: response.budget,
        genres: response.genres,
        homepage: response.homepage,
        imdb: response.imdb_id,
        language: response.spoken_languages.name,
        video: response.videos.results.key,
        revenue: response.revenue,
        runtime: response.runtime,
        productionCompany: response.production_companies
      }
    })
    const result =  await Promise.all(unresolvedPromises);
    results.push(...result)
    page++
  }
  return results;
}

export const getMovieTrailers = async (id) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=budget,imdb_id,
    production_companies,release_date,revenue,runtime,tagline,videos`
    const response = await fetchData(url)
    return response
  } catch(error) {
    throw new Error(error.message)
  }
}

export const addUser = async (name, password, email, avatar) => {
  try {
    const url = 'http://localhost:3000/api/users/new';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(name, password, email, avatar),
      headers: {
        "Content_Type": "application/json"
      }
    })
    const user = await response.json();
    return user
  } catch(error) {
    throw new Error(error.message)
  }
}

export const getUser = async (email, password) => {
  try {
    const url = 'http://localhost:3000/api/users';
    const response = await fetch(url);
    const user = await response.json();
    const matchingUser = user.data.find(matchingemail => matchingemail.email === email && matchingemail.password === password)
    console.log(matchingUser)
    return matchingUser
  } catch(error) {
    throw new Error(error.message)
  }
}

