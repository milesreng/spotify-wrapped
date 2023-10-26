import React from 'react'
import { useState, useEffect } from 'react'

const Wrapped = () => {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [user, setUser] = useState()
  const [timeRange, setTimeRange] = useState()

  useEffect(() => {

    const getToken = async () => {
      setAccessToken(localStorage.getItem('access_token'))
      setRefreshToken(localStorage.getItem('refresh_token'))
    }

    const fetchData = async () => {
      const authParameters = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      }

      const user = await fetch('https://api.spotify.com/v1/me', authParameters)
        .then(response => response.json())

      setUser(user)
    }

    getToken()
    fetchData()
    setTimeRange('short')

  }, [accessToken])

  return (
    <div>
      {user && user.id}
    </div>
  )
}

export default Wrapped