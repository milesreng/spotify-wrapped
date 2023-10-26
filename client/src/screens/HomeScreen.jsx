import React from 'react'
import { useState, useEffect } from 'react'
import { generateRandomString, sha256, base64encode } from '../spotify'

const codeVerifier = generateRandomString(64)
const hashed = await sha256(codeVerifier)
const codeChallenge = base64encode(codeVerifier)


const HomeScreen = () => {
  const [accessToken, setAccessToken] = useState()

  const loginURL = {

  }

  return (
    <div>
      <a href={loginURL}>Log in</a>
    </div>
  )
}

export default HomeScreen