import React from 'react'
import { useState, useEffect } from 'react'

import Artist from './Artist'

const Wrapped = ({ token }) => {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [user, setUser] = useState()

  const [artists, setArtists] = useState()
  const [artistAlbums, setArtistAlbums] = useState()
  const [timeRange, setTimeRange] = useState()

  useEffect(() => {

    setAccessToken(token)
    setTimeRange('medium')

  }, [])

  useEffect(() => {
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

    fetchData()

  }, [accessToken])

  useEffect(() => {
    const fetchData = async () => {
      const authParameters = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      }

      const artists = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}_term&limit=5`, authParameters)
        .then(response => response.json())

      setArtists(artists)
      // const albums = await fetch(`https://api.spotify.com/v1/artists/${artists[0].id}/albums`, authParameters)
      //   .then(response => response.json())
      console.log(artists)
      // console.log(albums)
    }

    fetchData()

  }, [accessToken])

  return (
    <div className='w-full'>
      {artists && (
        <div className='bg-gray-light mx-auto w-11/12 md:w-2/3 pt-6 px-6'>
          <div className='w-3/4 overflow-hidden flex flex-row'>
            <img src={artists[0].images[0].url} alt="" />
            { artistAlbums && artistAlbums.map(album => (
              <img key={album.id} src={album.images[0].url} alt={album.name} />
            )) }
          </div>
          <h1 className='text-default-light uppercase font-header text-center text-4xl tracking-tight py-2'>
            {artists[0].name}
          </h1>
        </div>
      )}
      {artists && artists.slice(1,).map(artist => (
        <Artist key={artist.id} artist={artist} />
      ))}
    </div>
  )
}

export default Wrapped