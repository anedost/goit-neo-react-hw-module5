import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <NavLink className={s.link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
