import {
  ChangeEvent,
  FC,
  FocusEvent,
  FormEvent,
  useEffect,
  useRef,
  useState
} from 'react'
import { FormService } from './FormService'
import { AuthProps } from '../../types'
import css from './index.module.css'

export const Form: FC<AuthProps> = ({ setIsAuth }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErrors, setEmailErrors] = useState({
    empty: false,
    invalid: false
  })
  const [passwordErrors, setPasswordErrors] = useState({
    empty: false,
    invalid: false
  })

  const inputName = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputName.current) {
      inputName.current.focus()
    }
  }, [])

  const formService = new FormService()

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = event

    if (name === 'email') {
      setEmail(value.trim())
    }
    if (name === 'password') {
      setPassword(value.trim())
    }
  }

  const validateEmail = (event: FocusEvent<HTMLInputElement>) => {
    const email = event.target.value

    if (!email) {
      setEmailErrors({ empty: true, invalid: false })
    } else if (!formService.isValidEmailAddress(email)) {
      setEmailErrors({ empty: false, invalid: true })
    }
  }

  const validatePassword = (event: FocusEvent<HTMLInputElement>) => {
    const password = event.target.value

    if (!password) {
      setPasswordErrors({ empty: true, invalid: false })
    } else if (password.length < 4) {
      setPasswordErrors({ empty: false, invalid: true })
    }
  }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (formService.absentErrors(emailErrors, passwordErrors)) {
      formService.fakeFetch('serverUrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ email, password })
      })
        .then(response => {
          if (response === 'ok') {
            setIsAuth(true)
          }
        })
        .catch(console.error)
    }
  }

  const resetErrors = (event: FocusEvent<HTMLInputElement>) => {
    const field = event.target.name

    if (field === 'email') {
      setEmailErrors({ empty: false, invalid: false })
    }
    if (field === 'password') {
      setPasswordErrors({ empty: false, invalid: false })
    }
  }

  return (
    <div className={css.container}>
      <form
        method='POST'
        autoComplete='off'
        className={css.form}
        onSubmit={onSubmitHandler}
      >
        <h1 className={css.title}>Login</h1>
        <div className={css.field}>
          <input
            ref={inputName}
            value={email}
            onFocus={resetErrors}
            onChange={onChangeHandler}
            onBlur={validateEmail}
            className={css.input}
            type='email'
            name='email'
            placeholder=' '
            tabIndex={1}
          />
          <label
            className={css.label}
            style={formService.getColor('email', emailErrors, passwordErrors)}
          >
            {formService.getEmailLabel(emailErrors)}
          </label>
        </div>
        <div className={css.field}>
          <input
            value={password}
            onFocus={resetErrors}
            onChange={onChangeHandler}
            onBlur={validatePassword}
            className={css.input}
            type='password'
            name='password'
            placeholder=' '
            tabIndex={2}
          />
          <label
            className={css.label}
            style={formService.getColor('password', emailErrors, passwordErrors)}
          >
            {formService.getPasswordLabel(passwordErrors)}
          </label>
        </div>
        <button
          className={css.button}
          type='submit'
          tabIndex={3}
        >
          Submit
        </button>
      </form>
    </div>
  )

}