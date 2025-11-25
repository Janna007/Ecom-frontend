import { getSelf } from "./api"

export const getUser=async()=>{
    //server call api
    const {data}= await getSelf()
    return data
  }