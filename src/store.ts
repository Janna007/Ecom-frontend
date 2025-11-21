import { create } from 'zustand'
import { devtools } from 'zustand/middleware'


interface User {
    id:number; 
    firstName:string
    lastName:string
    email:string
    role:string
}

interface AuthUser {
   user: null | User
   setUser:(user:User)=>void
   logOut:()=>void
}


export const userAuth = create<AuthUser>()(
  devtools(
   
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        logOut: () => set({ user: null }),
      }),

  )
)