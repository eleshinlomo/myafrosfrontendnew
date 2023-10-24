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




const LandingPage = () => {

const handleSuccesResponse = (response: any)=>{
  console.log(response)
}

const handleErrorResponse = (response: void)=>{
  console.log(response)
}
  
  const GOOGLE_LOGIN_URL = process.env.NEXT_PUBLIC_SSO_LOGIN_URL

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

  useEffect(()=>{

    // if (typeof window !== 'undefined') {
    // const google = window.google;

    // // Token Client

    // google.accounts.oauth2.initTokenClient()
    // }
  

}, [])

  return (
  
    <div className=" leading-7 h-full  flex flex-col text-black
    justify-center items-center overflow-hidden border border-b-gray-100
    ">
      
 <div className="flex flex-col  justify-center items-center my-4">
  <p className=" mt-20">Do everything with AI</p>
  
 </div>

 <div className='flex flex-col  justify-center items-center 
 xl '>
  <h1 className='text-blue'>MY AFROS - WE ARE REBRANDING</h1>
  <h2 className="mt-5 text-base ">CHECK US OUT</h2>
 </div>

<div className='flex flex-col justify-center items-center  mt-10 
'>
  <h2>WHAT WOULD YOU LIKE TO DO TODAY?</h2>
<Sheet>
  <SheetTrigger className='flex flex-col justify-center items-center'>
    <Button variant='default' className='mt-6'>
    CHOOSE TASK
    </Button>
    </SheetTrigger>
  <SheetContent side="top" className=" flex 
  flex-col justify-center items-center overflow-scroll  ">
      <SheetHeader>
      <SheetTitle className='text-black xl leading-10 text-center'>
        <div className=' animate-pulse'>
        <h1>MY AFROS</h1>
        </div>
        Choose your task
        </SheetTitle>
        </SheetHeader>

     <div className='flex flex-col justify-center items-center '>

     <Button  className='my-5' asChild>
    <Link href='/dashboard'>SEE ALL</Link>
  </Button>

      <Button  className='my-5' asChild>
    <Link href='/general'>GENERAL CONVERSATION</Link>
  </Button>

  <Button  className='my-5' asChild>
    <Link href='/boyfriend'>CHAT WITH AI BOYFRIEND</Link>
  </Button>

  <Button  className='my-5' asChild>
    <Link href='/girlfriend'>CHAT WITH AI GIRLFRIEND</Link>
  </Button>

  <Button  className='my-5 p-4' asChild>
    <Link href='/code'>GENERATE CODES WITH AI</Link>
  </Button>
  

  <Button  className='my-5' asChild>
    <Link href='/image'>GENERATE IMAGES WITH AI</Link>
  </Button>

  <Button  className='my-5  p-4' asChild>
    <Link href='/music'>GENERATE MUSIC WITH AI</Link>
  </Button>

  <Button  className='my-5 p-4' asChild>
    <Link href='/video'>GENERATE VIDEOS WITH AI</Link>
  </Button>


  <Button  className='my-5' asChild>
    <Link href='/doc'>ANALYSE DOCS WITH AI</Link>
  </Button>

  </div>

  </SheetContent>
</Sheet>

</div>

<div className='my-4 flex flex-col justify-center items-center'>
  {/* <Image 
  alt='AI'
  width={300}
  height={300}
  src='/anticent_a_cute_AI_agent_at_a_work_desk_76ed2f23-126d-4479-9859-0930804b3433.png'
  /> */}
  
</div>
      
    <div className="h-full  flex  justify-center items-center gap-3 z-10">
        
        
        
        {/* <Link 
        className='flex gap-2 bg-black text-white pr-2'
         href="http://localhost:8000/accounts/login/">
        <Image src='/google_logo.png' alt='google logo' width='20' height='20' />
        LOGIN WITH GOOGLE
        </Link> */}

       

       <Button className='flex gap-1' asChild>
        <Link href={`${GOOGLE_LOGIN_URL}`}>
        <Image src='/google_logo.png' alt='logo' width='20' height='20' />
        Login with Google
        </Link>
        </Button> 

        {/* <GoogleLogin onSuccess={handleSuccesResponse} onError={handleErrorResponse} /> */}

        
        

       
        

         {/* <GoogleButton /> */}

        

        
        
    </div>
    </div>
    
  )
}

export default LandingPage