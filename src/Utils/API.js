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
