import { FC } from 'react'
import { WithAuthentication } from '../withAuthentication'
import { AuthProps } from '../../types'
import css from './index.module.css'

export const PrivatePage: FC<AuthProps> = () => {
  return (
    <h1 className={css.h1}>Private page</h1>
  )
}

const WithAuthenticationPrivatePage = WithAuthentication(PrivatePage)
export default WithAuthenticationPrivatePage