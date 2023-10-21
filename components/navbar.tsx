import {useState, useEffect} from 'react'
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import MobileSidebar from "./mobile-sidebar"
import Link from 'next/link'
import { UserAvatar } from './user-avater'
import { ProfileAvatar } from './profile-avatar'




export const Navbar = () => {



  
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

  const handleLogout = async ()=>{
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

  
  return (
    <div className="flex items-center p-4">
        <MobileSidebar />

        <div className="flex w-full justify-end">

              
         <ProfileAvatar />
         
         
         
         
        </div>
    </div>
  )
}

