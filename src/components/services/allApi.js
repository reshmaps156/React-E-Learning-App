import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const addUser = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/users`,reqbody)
}

export const loginUser = async()=>{
    return await commonApi('GET',`${serverUrl}/users`,"")
}