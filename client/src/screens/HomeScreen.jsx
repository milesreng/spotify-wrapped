import React from 'react'
import { useState, useEffect } from 'react'
import { generateRandomString, sha256, base64encode } from '../spotify'

const codeVerifier = generateRandomString(64)
const hashed = await sha256(codeVerifier)
const codeChallenge = base64encode(codeVerifier)


const HomeScreen = () => {

  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
  const REDIRECT_URI = import.meta.env.VITE_DEV_REDIRECT_URI
  const auth_url = new URL(import.meta.env.VITE_AUTH_ENDPOINT)
  const scope = 'streaming user-read-email user-read-private user-top-read'

  const loginParams = {
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    scope: scope
  }

  auth_url.search = new URLSearchParams(loginParams).toString()

  useEffect(() => {
    window.localStorage.removeItem('access_token')
    window.localStorage.removeItem('refresh_token')
  }, [])

  return (
    <div>
      <a href={auth_url}>Log in</a>
    </div>
  )
}

export default HomeScreen