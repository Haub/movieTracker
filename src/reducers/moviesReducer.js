
export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      return action.movies
    case 'TOGGLE_FAVORITE':
      return state.map(movie => {
        if (action.favorites.includes(movie.id)) {
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