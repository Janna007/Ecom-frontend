// import React from 'react'

import { Outlet } from "react-router-dom"

function NonAuth() {
  return (
    <div>
        <h1>non auth</h1>
        <Outlet/>
      
    </div>
  )
}

export default NonAuth
