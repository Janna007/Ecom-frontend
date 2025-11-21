// import React from 'react'

import { Navigate, Outlet } from "react-router-dom"
import { userAuth } from "../store"

function NonAuth() {
    const {user} =userAuth()
    if(user !== null){
        return <Navigate to={'/'} replace={true} />
    }
  return (
    <div>
        <h1>non auth</h1>
        <Outlet/>
      
    </div>
  )
}

export default NonAuth
