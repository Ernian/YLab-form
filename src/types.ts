import { Dispatch, SetStateAction } from 'react'

export interface AuthProps {
  isAuth: boolean
  setIsAuth: Dispatch<SetStateAction<boolean>>
}