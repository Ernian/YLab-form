import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../layout'
import { MainPage } from '../mainPage'
import { LoginPage } from '../loginPage'
import PrivatePage from '../privatePage'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout setIsAuth={setIsAuth} isAuth={isAuth} />}>
          <Route
            index
            element={<MainPage />}
          />
          <Route
            path='login'
            element={<LoginPage setIsAuth={setIsAuth} isAuth={isAuth} />}
          />
          <Route
            path='private'
            element={<PrivatePage setIsAuth={setIsAuth} isAuth={isAuth} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
