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
       <Outlet/>
    </div>
  )
}

export default NonAuth
