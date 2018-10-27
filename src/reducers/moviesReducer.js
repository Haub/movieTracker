
export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      return action.movies
    case 'TOGGLE_FAVORITE':
      const favIds = action.favorites.map(fav => fav.movie_id)
      return state.map(movie => {
        if (favIds.includes(movie.id)) {
          movie.favorite = !movie.favorite;
          return movie
        } else {
          return movie
        }
      })
    default: 
      return state
  }
}