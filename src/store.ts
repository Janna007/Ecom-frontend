import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'


export interface User {
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
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        logOut: () => set({ user: null }),
      }),
      {
        name: 'user-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      }
    )
  )
)