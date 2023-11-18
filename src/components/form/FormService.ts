interface Errors {
  empty: boolean
  invalid: boolean
}

export class FormService {
  isValidEmailAddress(email: string) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
  }

  fakeFetch(url: string,
    options: {
      method: string,
      headers: { [key: string]: string },
      body: string
    }): Promise<string> {
    return new Promise((resolve, reject) => {
      url && options ? setTimeout(() => resolve('ok'), 500) :
        setTimeout(() => reject('error'), 500)
    })
  }

  absentErrors(emailErrors: Errors, passwordErrors: Errors) {
    return Object.values(emailErrors).every(error => !error) &&
      Object.values(passwordErrors).every(error => !error)
  }

  getEmailLabel(emailErrors: Errors) {
    if (emailErrors.empty) {
      return 'Please enter your email'
    }
    if (emailErrors.invalid) {
      return 'Wrong email'
    }
    return 'Email'
  }

  getPasswordLabel(passwordErrors: Errors) {
    if (passwordErrors.empty) {
      return 'Please enter your password'
    }
    if (passwordErrors.invalid) {
      return 'Too short password'
    }
    return 'Password'
  }

  getColor(field: 'email' | 'password',
    emailErrors: Errors,
    passwordErrors: Errors) {

    if (field === 'email') {
      if (emailErrors.empty || emailErrors.invalid) {
        return { color: '#b91c1c' }
      }
    }
    if (field === 'password') {
      if (passwordErrors.empty || passwordErrors.invalid) {
        return { color: '#b91c1c' }
      }
    }
  }
}