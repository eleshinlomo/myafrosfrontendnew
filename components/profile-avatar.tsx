import {useState, useEffect} from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { string } from "zod"
import { Button } from "./ui/button"
import  Link  from "next/link"
import { SheetContent, Sheet, SheetTrigger } from "./ui/sheet"

export const ProfileAvatar = ()=>{
const [userProfile, setUserProfile] = useState<[] | null>([])
const [toggleBtn, setToggleBtn] = useState(false)

const handleClose = ()=>{
  setToggleBtn(false)
}

const handleOpen = ()=>{
  setToggleBtn(true)
}


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

  const handleUserProfile = async ()=>{
    await fetch(`${BASE_URL}/userprofile/`, {
     mode: 'cors',
     method: 'GET',
     credentials: 'include',
     headers: {"Content-Type": 'application/json'}
    })
    .then((res)=>{
       if(!res) throw new Error("No response from server")
       return res.json()
    })

   .then((data)=>{
    console.log(data)
    setUserProfile(data.message)
   })
 }

 useEffect(()=>{
  handleUserProfile()
 }, [])
    
 
    return (

      <div>
      <Sheet>
        <SheetTrigger>
          <Button size='icon' asChild className='mt-2'>
        <Avatar className='h-12 w-12'>
              <AvatarImage src='/avatar-1968236_1280.png' />
              
               <AvatarFallback className='bg-white text-black'>
                  Profile
                </AvatarFallback>
            </Avatar>
            </Button>
        </SheetTrigger>
        <SheetContent side='top' className="p-0">
        
        
          {userProfile ?
          <div className='  bg-black border-r-4 flex flex-col justify-center items-center'>
          {userProfile.map((user: any, index)=>
          <ul key={index} className='text-sm text-center text-white py-2 '>
          <li>Username: {user.username}</li>
          <li>{user.email}</li>
          <li>Firstname: {user.firstname}</li>
          <li>Lastname: {user.lastname}</li>
          </ul>
          )}
          <div className='flex gap-1'>
          <Button asChild>
            <Link href='http://localhost:8000/accounts/logout/'>Logout</Link>
          </Button>
          <Button asChild>
            <Link href=''>Edit Profile</Link>
          </Button>
          </div>
          </div>:null
          }
         
        </SheetContent>
        </Sheet>
    </div>

    )
}