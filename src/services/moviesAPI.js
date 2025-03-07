import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common['Authorization'] =
  `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTAzNzZlZjRjMTNlOTM3MDdjNTdkZWYzZTlhYzhjYSIsIm5iZiI6MTYxMjcyNDMxOS45MzI5OTk4LCJzdWIiOiI2MDIwMzg1ZjVlZDk2MjAwNDAxYWE3NTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lpGmfs5mGbytCgQq6DK6Hah4cC2b2pSvqeqdRVVC-jc`

export const getPopularMovies = async () => {
  try {
    const response = await axios.get('/trending/movie/day')
    return response.data.results
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getMoviesBySearch = async (query) => {
  try {
    const response = await axios.get(`/search/movie?query=${query}`)
    return response.data.results
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getMovieById = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getMovieCast = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`)
    return response.data.cast
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`)
    return response.data.results
  } catch (error) {
    console.log(error)
    return []
  }
}
