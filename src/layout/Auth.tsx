// import React from 'react'

import { Navigate, Outlet } from "react-router-dom"
import { userAuth } from "../store"

function Auth() {

    const {user} =userAuth()
    if(user === null){
        return <Navigate to={'/auth/login'} replace={true} />
    }
  return (
    <div>   
       <h1> auth</h1>
       <Outlet/>
    </div>
  )
}

export default Auth
