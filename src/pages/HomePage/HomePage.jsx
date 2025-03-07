import { useEffect, useState } from 'react'
import { getPopularMovies } from '../../services/moviesAPI'
import MovieList from '../../components/MovieList'

const HomePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getPopularMovies().then((movies) => setMovies(movies))
  }, [])

  return <MovieList movies={movies} />
}

export default HomePage
