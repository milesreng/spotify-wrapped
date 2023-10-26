import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
 } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import HomeScreen from './screens/HomeScreen'
import WrappedScreen from './screens/WrappedScreen'
import TracksScreen from './screens/TracksScreen'
import ArtistsScreen from './screens/ArtistsScreen'
import GenresScreen from './screens/GenresScreen'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' index={true} element={<HomeScreen />} />
      <Route path='/wrapped' index={true} element={<WrappedScreen />} />
      <Route path='/tracks' index={true} element={<TracksScreen />} />
      <Route path='/artists' index={true} element={<ArtistsScreen />} />
      <Route path='/genres' index={true} element={<GenresScreen />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
