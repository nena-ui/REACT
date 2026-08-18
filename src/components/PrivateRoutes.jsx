import React, { useContext } from 'react'
import AuthContext from './contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {

    const {token,loading} = useContext(AuthContext)

    console.log(token,"here")

    if(loading) {
        return "Loading.."
    }

    if(!token) {
        return <Navigate to = {"/signup"}/>
    }

  return (
  <>
  {children}
  </>
  )
}

export default PrivateRoutes
