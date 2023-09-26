import React, { useContext} from 'react'
import { Outlet, Navigate} from 'react-router-dom'
import { AuthContext } from '../AuthContextApi/ContextProvider'

const PriveAllRoutes = () => {
    const {LoginAuth} = useContext(AuthContext) ;

  return (
    LoginAuth?<Outlet/> : <Navigate to={'/'} />
  )
}

export default PriveAllRoutes
