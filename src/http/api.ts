//auth-service api s

import { api } from "./client"

export const login=(credentials:any)=>{
     api.post('/auth/login',credentials)
}