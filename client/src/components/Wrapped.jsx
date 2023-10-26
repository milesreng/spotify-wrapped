import React from 'react'
import { useState, useEffect } from 'react'

const Wrapped = () => {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()

  useEffect(() => {

    const getToken = async () => {
      setAccessToken(localStorage.getItem('access_token'))
      setRefreshToken(localStorage.getItem('refresh_token'))
    }

    getToken()
  }, [])

  return (
    <div>
      {accessToken}
    </div>
  )
}

export default Wrapped