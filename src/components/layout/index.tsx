import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { Footer } from '../footer'
import { AuthProps } from '../../types'
import css from './index.module.css'

export const Layout = ({ isAuth, setIsAuth }: AuthProps) => {
  return (
    <main className={css.main}>
      <Header setIsAuth={setIsAuth} isAuth={isAuth} />
      <div className={css.content}>
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}
