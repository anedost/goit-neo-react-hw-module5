import { useParams } from 'react-router-dom'
import s from './MovieCast.module.css'
import { getMovieCast } from '../../services/moviesAPI'
import { useEffect, useState } from 'react'
import defaultImage from '../../assets/img/default.jpeg'

const MovieCast = () => {
  const { movieId } = useParams()
  const [cast, setCast] = useState(null)

  useEffect(() => {
    getMovieCast(movieId).then((cast) => setCast(cast))
  }, [movieId])
  return (
    <ul className={s.list}>
      {cast &&
        cast.map(({ id, profile_path, name, character }) => (
          <li key={id} className={s.item}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultImage
              }
              alt={name}
              width={100}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  )
}

export default MovieCast
