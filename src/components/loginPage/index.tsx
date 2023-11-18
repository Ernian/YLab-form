import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { Form } from '../form'
import { AuthProps } from '../../types'

export const LoginPage: FC<AuthProps> = ({ isAuth, setIsAuth }) => {
  return isAuth ?
    <Navigate to='/private' /> :
    <Form isAuth={isAuth} setIsAuth={setIsAuth} />
}
