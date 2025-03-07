import { NavLink, useParams, Outlet } from 'react-router-dom'
import { getMovieById } from '../../services/moviesAPI'
import { useEffect, useState } from 'react'
import GoBack from '../../components/GoBack'
import s from './MovieDetailsPage.module.css'
import defaultImage from '../../assets/img/default.jpeg'

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    getMovieById(movieId).then((movie) => setMovie(movie))
  }, [movieId])

  return (
    <div className={s.wrapper}>
      <GoBack />
      {movie && (
        <div className={s.card}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImage
            }
            alt={movie.title}
            width={400}
          />
          <div className={s.attributes}>
            <h2>{movie.title}</h2>
            <p>User score: {movie.vote_average}</p>
            <h3>Overview</h3>
            <p className={s.overview}>{movie.overview}</p>
            <h3>Genres</h3>
            <ul className={s.genres}>
              {movie.genres.map(({ id, name }) => (
                <li className={s.genre} key={id}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <h3>Additional information</h3>
      <div className={s.genres}>
        <NavLink className={s.link} to={`/movies/${movieId}/cast`}>
          Cast
        </NavLink>
        <NavLink className={s.link} to={`/movies/${movieId}/reviews`}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default MovieDetailsPage
