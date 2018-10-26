import { getMovies, getUser, addUser } from "../utils";

export const fetchMovies = () => {
  return async dispatch => {
    dispatch(contentStatus('loading'))
    try {
      const response = await getMovies()
      dispatch(addMovies(response))
      dispatch(contentStatus('resolved'))
    } catch (error) {
      dispatch(contentStatus('error'))
    }
  }
}

export const fetchUser = (name, email, password, avatar) => {
  return async dispatch => {
    dispatch(contentStatus('loading'))
    try {
      let response;
      if (!name) {
        response = await getUser(email, password)
      } else {
        response = await addUser(name, email, password, avatar)
      }
      dispatch(loginUser(response))
      dispatch(contentStatus('resolved'))
    } catch (error) {
      dispatch(contentStatus('error'))
    }
  }
}

export const contentStatus = (string) => ({
  type: 'CONTENT_STATUS',
  status: string
})

export const addMovies = (movies) => ({
  type: "ADD_MOVIES",
  movies
});

export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
})