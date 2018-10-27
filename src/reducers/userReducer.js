export const userReducer = (state= {}, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return action.user
    case 'TOGGLE_FAVORITE':
      return {...state, favorites: action.favorites}
    default: 
      return state
  }
} 
