import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import MovieDetails from '../Pages/MovieDetails'
import GenerateLink from '../Pages/GenerateLink'
import Links from '../Pages/Links'
import DownloadPage from '../Pages/DownloadPage'
import AdminPage from '../Pages/AdminPage'
import Edit from '../Pages/Edit'
import Login from '../Pages/Login'
import PriveAllRoutes from '../utils/PriveAllRoutes'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movieDetails' element={<MovieDetails />} />
      <Route path='/generateLink' element={<GenerateLink />} />
      <Route path='/links' element={<Links />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/downloadPage' element={<DownloadPage />} />

      <Route element={<PriveAllRoutes />} >
        <Route path='/adminPage' element={<AdminPage />} />
        <Route path='/adminPage/edit' element={<Edit />} />
      </Route>

    </Routes>
  )
}

export default AllRoutes
