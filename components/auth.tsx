import { UserProfile } from "@clerk/nextjs"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL


export const authChecker = async ()=>{
  
   const response = await fetch(`${BASE_URL}/userprofile/`, {
     mode: 'cors',
     method: 'GET',
     credentials: 'include',
     headers: {"Content-Type": 'application/json'}
    })
    
        if (!response) throw new Error("Server error")
        return await response.json()
  
    
  }



export const handleLogout = async ()=>{
   
    await fetch(`${BASE_URL}/accounts/logout/`, {
     mode: 'cors',
     method: 'POST',
     credentials: 'include',
     headers: {"Content-Type": 'application/json'}
    })
    .then((res)=>{
       if(!res) throw new Error("No response from server")
       return res.json()
    })
    .then((data)=>{
     console.log(data)
    })
 }