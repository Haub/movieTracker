export const fetchData = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data.results
}

export const getMovies = async () => {
  let results = []
  for (let i = 1; i < 5; i++) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=41385c65fcaba300518fe2442257db12&language=en-US&page=${i}&region=US`
    const response = await fetchData(url)
    const result = response.map(movie => 
      ({
        title: movie.title,
        favorite: false,
        image: movie.poster_path,
        release: movie.release_date,
        overview: movie.overview,
        rating: movie.vote_average
      })
    )
    results.push(...result)
  }
  return results;
}


