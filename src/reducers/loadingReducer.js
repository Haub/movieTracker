export const loadingReducer = (state= '', action) => {
  switch(action.type) {
    case 'CONTENT_STATUS':
      return action.status 
    default: 
      return state
  }
} 