import { getSelf, getUsers } from "./api"



export const getUser=async()=>{
    //server call api
    const {data}= await getSelf()
    return data
  }


export const getUserList=async({queryKey}:any)=>{
  const [_key,params]=queryKey
  const {data}=await getUsers({params})
  return data
}