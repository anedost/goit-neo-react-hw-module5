import { useParams } from 'react-router-dom'
import s from './MovieReviews.module.css'
import { getMovieReviews } from '../../services/moviesAPI'
import { useEffect, useState } from 'react'

const MovieReviews = () => {
  const { movieId } = useParams()
  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    getMovieReviews(movieId).then((reviews) => setReviews(reviews))
  }, [movieId])
  return (
    <ul className={s.list}>
      {reviews && reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id} className={s.item}>
            <h3 className={s.title}>{author}</h3>
            <p className={s.text}>{content}</p>
          </li>
        ))
      ) : (
        <li className={s.item}>
          <p>{"We don't have any reviews for this movie."}</p>
        </li>
      )}
    </ul>
  )
}

export default MovieReviews
