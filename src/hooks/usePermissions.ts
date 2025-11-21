import type { User } from "../store"


export const usePermissions=()=>{
     const allowedRoles=['admin','manager']

     const _hasPermission=(user:User)=>{
          if(user){
            return allowedRoles.includes(user.role)
          }

          return false
     }


     return {
        isAllowed:_hasPermission
     }
}