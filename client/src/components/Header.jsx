/* eslint-disable react/prop-types */
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ accessToken }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    const authParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }

    async function fetchData () {
      const user = await fetch('https://api.spotify.com/v1/me', authParameters)
      .then(response => response.json())

      setUser(user)
    }

    fetchData()
  })

  return (
    <div>
      <div>
        {user.display_name}
      </div>
    </div>
  )
}

export default Header