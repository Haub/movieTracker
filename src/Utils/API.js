export const fetchData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

export const postData = async (url, name, email, password) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({name: name, email: email, password: password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const user = await response.json();
    return user
  } catch(error) {
    throw new Error(error.message)
  }
}

export const addFavorite = async (movie, url) => {
  console.log(movie)
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const favoriteId = await response.json();
    return favoriteId
  } catch(error) {
    throw new Error(error.message)
  }
}

export const removeFavorite = async (movie, url) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ user_id: movie.userId, movie_id: movie.id }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const favoriteId = await response.json();
    return favoriteId
  } catch(error) {
    throw new Error(error.message)
  }
}