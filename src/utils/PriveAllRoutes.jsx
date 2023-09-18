import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate} from 'react-router-dom'
import { AuthContext } from '../AuthContextApi/ContextProvider'

const PriveAllRoutes = () => {
    const {LoginAuth} = useContext(AuthContext) ;
    console.log(LoginAuth) ;

  return (
    LoginAuth?<Outlet/> : <Navigate to={'/'} />
  )
}

export default PriveAllRoutes
