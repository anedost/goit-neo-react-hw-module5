import { Link } from 'react-router-dom'
import s from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <h1>404 - Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default NotFoundPage
