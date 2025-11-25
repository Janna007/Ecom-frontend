import type { FieldType } from "../types";
import { login, logoutUser } from "./api";

export const loginUser = async (credentials: FieldType) => {
    //server call logic
    const data= login(credentials); 
    return data
  };
  
 
  
  export const logout=async()=>{
    return await logoutUser()
  }
  