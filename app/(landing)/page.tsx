"use client"
import {useEffect, useState} from 'react'
import { Button } from "@/components/ui/button"
import  Link  from "next/link"
import Image from "next/image"
import {Navbar} from "@/components/navbar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import GoogleButton from 'react-google-button'




const LandingPage = () => {
  

  return (
  
    <div className="h-full  flex flex-col bg-black/80 text-white
    justify-center items-center overflow-hidden border border-b-gray-100
    ">
      

      <div className="hidden lg:flex mt-10 text-black">
       
      <NavigationMenu>
  <NavigationMenuList>

  <NavigationMenuItem>
      <NavigationMenuTrigger>SEARCH THE INTERNET WITH AI</NavigationMenuTrigger>
      <NavigationMenuContent>
        <Link href='sign-up'>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>ENTER HERE</NavigationMenuLink>
        </Link>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger>WRITE ARTICLES WITH AI</NavigationMenuTrigger>
      <NavigationMenuContent>
        <Link href='sign-up'>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>ENTER HERE</NavigationMenuLink>
        </Link>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger>GENERATE IMAGES WITH AI</NavigationMenuTrigger>
      <NavigationMenuContent>
        <Link href='sign-up'>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>ENTER HERE</NavigationMenuLink>
        </Link>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger>CREATE MUSIC WITH AI</NavigationMenuTrigger>
      <NavigationMenuContent>
        <Link href='sign-up'>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>ENTER HERE</NavigationMenuLink>
        </Link>
      </NavigationMenuContent>
    </NavigationMenuItem>
    
  </NavigationMenuList>
</NavigationMenu>
</div>

 <div className="flex flex-col  justify-center items-center my-4">
  <p className=" mt-20">Do everything with AI</p>
  
 </div>

 <div className='flex flex-col  justify-center items-center'>
  <h1>MY AFROS - WE ARE REBRANDING</h1>
  <h2 className="mt-5 text-base ">CHECK US OUT</h2>
 </div>

      
    <div className="h-full  flex  justify-center items-center gap-3 z-10">
        
        
        <Link href="/dashboard">
        <Button>
         SEE MORE
        </Button>
        </Link>

        <Link href="/dashboard">
        <Button>
         SEE MORE
        </Button>
        </Link>

         {/* <GoogleButton /> */}

        

        
        
    </div>
    </div>
    
  )
}

export default LandingPage