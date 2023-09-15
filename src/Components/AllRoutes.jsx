import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import MovieDetails from '../Pages/MovieDetails'
import GenerateLink from '../Pages/GenerateLink'
import Links from '../Pages/Links'
import DownloadPage from '../Pages/DownloadPage'
import CreateMovies from '../Pages/CreateMovies'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/createMovies' element={<CreateMovies/>} />
      <Route path='/movieDetails' element={<MovieDetails/>} />
      <Route path='/generateLink' element={<GenerateLink/>} />
      <Route path='/links' element={<Links/>} />
      <Route path='/downloadPage' element={<DownloadPage/>} />
    </Routes>
  )
}

export default AllRoutes
