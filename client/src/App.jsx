import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import './index.css'

import Header from './components/Header'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const access = localStorage.getItem('access_token')
    if (access !== null) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [])

  return (
    <div>
      {loggedIn && <Header />}
      <Outlet />
    </div>
  )
}

export default App
