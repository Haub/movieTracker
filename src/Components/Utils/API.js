const fetchData = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getMovies = async () => {
  let result = []
  for (let i = 1; i < 5; i++) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=41385c65fcaba300518fe2442257db12&language=en-US&page=${i}&region=US`
    const response = await fetchData(url)
    response.results.forEach(title => title.favorite = false )
    result.push(...response.results)
  }
  return result;
}


