import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthProps } from '../../types'

export const WithAuthentication = (WrappedComponent: FC<AuthProps>) => {
  return function (props: AuthProps) {
    return props.isAuth ?
      <WrappedComponent {...props} /> :
      <Navigate to='/login' />
  }
}
