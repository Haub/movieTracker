export const fetchMovies = async () => {
 const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=41385c65fcaba300518fe2442257db12&language=en-US&page=1&region=US');
 const data = await response.json();
 const movieData = data.results.map(movie => (
   {
     title: movie.title,
     poster_path: movie.poster_path,
     overview: movie.overview,
     release_date: movie.release_date
   }
 ))
 console.log(movieData)

}