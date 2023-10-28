/* eslint-disable react/prop-types */
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SpotifyGreen from '../assets/spotify-green.svg'

const Header = () => {
  const [user, setUser] = useState()
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()

  useEffect(() => {
    setAccessToken(localStorage.getItem('access_token'))
    setRefreshToken(localStorage.getItem('refresh_token'))
  }, [])

  useEffect(() => {
    const authParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }

    async function fetchData () {
      console.log(accessToken)
      const user = await fetch('https://api.spotify.com/v1/me', authParameters)
      .then(response => response.json())

      setUser(user)
    }

    fetchData()
  }, [accessToken])

  return (
    <>{user && (
    <div className='w-full h-20 text-gray-dark border-b border-gray-light bg-default-light flex flex-row justify-between px-4'>
      <div className='flex flex-row my-auto h-full'>
        {/* <img className='w-6 my-auto'
            src={SpotifyGreen} alt="" /> */}
        <h1 className='font-header text-xl my-auto uppercase align-bottom gap-1 font-bold flex flex-row'>
            <span className='flex align-bottom flex-row'>
              <span className='text-sm md:text-4xl my-auto'>s</span>
              <span className='hidden md:flex text-xs lg:text-sm my-auto'>potify</span>
            </span>
            <span className='flex flex-row'>
              <span className='text-sm md:text-4xl my-auto'>w</span>
              <span className='hidden md:flex text-xs lg:text-sm my-auto'>rapped</span>
            </span>
            <span className='flex flex-row'>
              <span className='text-sm md:text-4xl my-auto'>p</span>
              <span className='hidden md:flex text-xs lg:text-sm my-auto'>review</span>
            </span> 
        </h1>
      </div>
      <div className='h-14 flex flex-row gap-4 my-auto'>
        <div className='my-auto font-content text-right'>
          <h1 className='text-lg'>{user.display_name}</h1>
          <p className='text-sm text-gray'>@{user.id}</p>
        </div>
        <div>
          <img className='w-14 rounded-full'
            src={user.images[0].url} alt='user profile photo' />
        </div>
      </div>
    </div>)}
    </>
  )
}

export default Header