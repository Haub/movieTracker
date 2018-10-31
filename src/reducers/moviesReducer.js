
export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      return action.movies
    case 'CLEAR_FAVORITES':
    console.log('hey')
      return state.map(movie => ( {...movie, favorite: false } ))
    case 'TOGGLE_FAVORITE':
      const favIds = action.favorites.map(fav => fav.movie_id)
      return state.map(movie => {
        if (favIds.includes(movie.id)) {
          movie.favorite = true;
          return movie
        } else {
          movie.favorite = false;
          return movie
        }
      })
    default: 
      return state
  }
}