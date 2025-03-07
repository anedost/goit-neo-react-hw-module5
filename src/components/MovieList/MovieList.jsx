import { Link, useLocation } from 'react-router-dom'
import s from './MovieList.module.css'
import defaultImage from '../../assets/img/default.jpeg'

const MovieList = ({ movies }) => {
  const location = useLocation()

  return (
    <ul className={s.list}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link className={s.link} to={`/movies/${id}`} state={location}>
            <img
              className={s.img}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultImage
              }
              alt={title}
            />
            <div className={s.overlay}>
              <h3 className={s.title}>{title}</h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MovieList
