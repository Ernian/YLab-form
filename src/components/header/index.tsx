import { Link } from 'react-router-dom'
import { AuthProps } from '../../types'
import { FaReact } from "react-icons/fa"
import { FaRegUser } from "react-icons/fa"
import css from './index.module.css'

export const Header = ({ isAuth, setIsAuth }: AuthProps) => {
  const logOut = () => setIsAuth(false)

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link
          className={css.logo}
          to='/'
        >
          {<FaReact size={32} />}
        </Link>

        <div className={css.user}>
          <Link to='private'><FaRegUser size={28} color={'#f0f8ff'} /></Link>
          {
            isAuth ?
              <button onClick={logOut}>Logout</button> :
              <Link to='login' className={css.login}>Login</Link>
          }
        </div>
      </div>
    </header>
  )
}
