import React from 'react'
import { useState, useEffect } from 'react'
import { Buffer } from 'buffer'

import Header from '../components/Header'
import Wrapped from '../components/Wrapped'

const WrappedScreen = () => {

  const [code, setCode] = useState()
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()

  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
  const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET
  const REDIRECT_URI = import.meta.env.VITE_DEV_REDIRECT_URI

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)

    setCode(urlParams.get('code'))
    let codeVerifier = localStorage.getItem('code_verifier')

    const getToken = async (code) => {
      const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + new Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
        },
        body: new URLSearchParams({
          client_id: CLIENT_ID,
          grant_type: 'authorization_code',
          code,
          redirect_uri: REDIRECT_URI,
          code_verifier: codeVerifier
        })
      }

      const response = await fetch('https://accounts.spotify.com/api/token', payload)
        .then(response => response.json())

      // console.log(response)

      localStorage.setItem('access_token', response.access_token)
      localStorage.setItem('refresh_token', response.refresh_token)

      setAccessToken(response.access_token)
      setRefreshToken(response.refresh_token)
    }

    if (localStorage.getItem('access_token') === null) {
      getToken(code)
      // console.log('got token')
    }

    setAccessToken(localStorage.getItem('access_token'))
    setRefreshToken(localStorage.getItem('refresh_token'))

  }, [CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, code])

  return (
    <div>
      {accessToken && <Header />}
      {/* {accessToken && <Wrapped token={accessToken} />} */}
    </div>
  )
}

export default WrappedScreen