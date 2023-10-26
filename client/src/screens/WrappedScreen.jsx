import React from 'react'
import { useState, useEffect } from 'react'
import { Buffer } from 'buffer'
import { useNavigate } from 'react-router'

const WrappedScreen = () => {
  const navigate = useNavigate()

  const [code, setCode] = useState()
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()

  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
  const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET
  const REDIRECT_URI = import.meta.env.VITE_DEV_REDIRECT_URI
  const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    console.log(urlParams)

    setCode(urlParams.get('code'))
    var codeVerifier = localStorage.getItem('code_verifier')

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

      const response = await fetch('https://accounts.spotify.com/api/token', payload).then(response => response.json())

      console.log(response)

      localStorage.setItem('access_token', response.access_token)
      localStorage.setItem('refresh_token', response.refresh_token)

      setAccessToken(response.access_token)
      setRefreshToken(response.refresh_token)
    }

    getToken(code)
  }, [code])

  return (
    <div>WrappedScreen</div>
  )
}

export default WrappedScreen