import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const addUser = async(reqbody)=>{
    if(!reqbody.username || !reqbody.email || !reqbody.password){
        throw new Error('Invalid request body')
    }
    return await commonApi('POST',`${serverUrl}/users`,reqbody)
}

export const loginUser = async()=>{
    return await commonApi('GET',`${serverUrl}/users`,"")
}

export const addCourseApi =async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqbody)
}

export const getCourseApi =async()=>{
    return await commonApi('GET',`${serverUrl}/videos`,"")
}

export const addVideoApi = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/coursevideo`,reqbody)
}

export const getVideoApi = async() =>{
    return await commonApi('GET',`${serverUrl}/coursevideo`,"")
}

export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/coursevideo/${id}`,{})
}