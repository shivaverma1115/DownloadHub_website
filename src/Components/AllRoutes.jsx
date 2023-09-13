import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import MovieDetails from '../Pages/MovieDetails'
import GenerateLink from '../Pages/GenerateLink'
import Links from '../Pages/Links'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movieDetails' element={<MovieDetails/>} />
      <Route path='/generateLink' element={<GenerateLink/>} />
      <Route path='/links' element={<Links/>} />
    </Routes>
  )
}

export default AllRoutes
