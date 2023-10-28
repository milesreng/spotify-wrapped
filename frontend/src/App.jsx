import React from 'react'
import { Outlet } from 'react-router'
import './index.css'


function App() {

  return (
    <div className='w-full min-h-screen bg-default-light'>
      <Outlet />
    </div>
  )
}

export default App
