//auth-service api s

import type { FieldType } from "../types"
import { api } from "./client"

export const login = (credentials: FieldType) =>
     api.post('/auth/login', credentials);
   
export const getSelf = () =>
     api.get('/auth/self')

export const logoutUser=()=>api.post('/auth/logout')
   
export const getUsers=({params}:any)=>api.get('/users/',{params})