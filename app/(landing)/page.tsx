"use client"
import {useEffect, useState} from 'react'
import { Button } from "@/components/ui/button"
import  Link  from "next/link"
import Image from "next/image"
import {Navbar} from "@/components/navbar"
import { cn } from "@/lib/utils"
import GoogleButton from 'react-google-button'
import { 
  SheetContent, 
  Sheet, 
  SheetTrigger, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription } from "@/components/ui/sheet"
import { CarIcon } from 'lucide-react'
import {GoogleLogin} from '@react-oauth/google'
import { PolicyAgreePopup } from '@/components/policyagreepopup'
import { Footer } from '@/components/footer'
import Login from '../(auth)/(routes)/auth/login'
import {gapi} from 'gapi-script'
import { getAccessToken } from '@/components/auth'
import { getCookies } from '@/components/auth'




const LandingPage = () => {

const csrftoken = getCookies()
const [accessToken, setAccesToken] = useState(null)

  const clientId = "564029075525-okibkfj0rch1cql74vh9pnnhcu96sphv.apps.googleusercontent.com"

  
//   useEffect(()=>{
//   function start() {
//   gapi.client.init({
//   clientId: clientId,
//   scope: [
//     'https://www.googleapis.com/auth/userinfo.email',
//     'https://www.googleapis.com/auth/userinfo.profile',
//     'openid'
// ]
//   })
//   }
//   gapi.load('client: auth2', start)
//   }, [])

  
  //   const token = gapi.auth.getToken().access_token

  
  // useEffect(()=>{
  //   if (!token) return
  //   setAccesToken(token)
  //   getAccessToken(accessToken)
  // }, [accessToken, token])

  


  
  const GOOGLE_LOGIN_URL = process.env.NEXT_PUBLIC_SSO_DJANGO_LOGIN_URL
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

  const handleGoogleSSO = async ()=>{
   await fetch(`${GOOGLE_LOGIN_URL}`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include'
   })
   .then((res)=>{
    if (!res) throw new Error("Server error")
    return res.json
   })
  }

  const handleGoogleLogin = async ()=>{
    await fetch(`${BASE_URL}/oauthlogin/`, {
     method: 'GET',
     mode: 'cors',
     credentials: 'include',

    })
    .then((res)=>{
     if (!res) throw new Error("Server error")
    }).catch((err)=>{
  console.log(err)
  })
   }

  



  return (
    
    <div>
      <div className='container h-full mx-auto  text-black'>
        
    <div className="  leading-10  flex flex-col
    gap-5 
    justify-center items-center 
    ">
      
 <div className="flex flex-col  justify-center items-center my-4">
  <p className=" mt-20 xl md:text-2xl lg:text-3xl">DO EVERYTHING WITH AI</p>
  
 </div>

 <div className=' flex flex-col  justify-center items-center 
 xl '>
  <h1 className='text-blue'>MY AFROS - WE ARE REBRANDING</h1>
  <h2 className="mt-5 text-base ">CHECK US OUT</h2>
 </div>

<div className='flex flex-col flex-wrap justify-center items-center  mt-10 
'>
  <div>
  <p>WHAT WOULD YOU LIKE TO DO?</p>
  </div>

  

</div>

<div className='my-4 flex flex-col justify-center items-center'>
  {/* <Image 
  alt='AI'
  width={300}
  height={300}
  src='/anticent_a_cute_AI_agent_at_a_work_desk_76ed2f23-126d-4479-9859-0930804b3433.png'
  /> */}
  
</div>
      
    <div className="  flex flex-col  justify-center items-center gap-5">
        
        
        
       
        <div className='flex flex-col justify-center items-center'>
       <Button className='flex  gap-1' asChild>
        <Link href={`${GOOGLE_LOGIN_URL}`}>
        Login Here
        </Link>
        
        </Button>  
        
        <Button className=' mt-5 text-white'  asChild>
          <Link href='/terms'>Read Our Terms</Link>
        </Button>
        </div>

        <div>
          <Login />
        </div>
        
        
        
        
    </div>
    <div>
          <Footer />
        <PolicyAgreePopup />
        </div>
    </div>
    
    </div>
    </div>
    
  )
}

export default LandingPage