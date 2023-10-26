import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [user, setUser] = useState()
  const [accessToken, setAccessToken] = useState()

  useEffect(() => {
    setAccessToken(localStorage.getItem('access_token'))
    
  }, [])

  return (
    <div>Header</div>
  )
}

export default Header