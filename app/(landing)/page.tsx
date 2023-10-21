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
import { SheetContent, Sheet, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "../../components/ui/sheet"




const LandingPage = () => {
  

  return (
  
    <div className=" leading-7 h-full  flex flex-col bg-black text-white
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

 <div className='flex flex-col  justify-center items-center 
 xl text-muted-foreground'>
  <h1>MY AFROS - WE ARE REBRANDING</h1>
  <h2 className="mt-5 text-base ">CHECK US OUT</h2>
 </div>

<div className='flex flex-col justify-center items-center mt-10'>
  <h2>WHAT WOULD YOU LIKE TO DO TODAY?</h2>
<Sheet >
  <SheetTrigger className='flex flex-col justify-center items-center'>
    <Button className=''>
    CHOOSE TASK
    </Button>
    </SheetTrigger>
  <SheetContent side="top" className="bg-black text-white flex 
  flex-col justify-center items-center ">
    <SheetHeader>
      <SheetTitle className='text-white xl leading-10 text-center'>Choose your task</SheetTitle>
      <SheetDescription className='text-white'>

     <div className='flex flex-col justify-center items-center '>
      <Button asChild className='my-5'>
    <Link href='/dashboard'>Have Conversation</Link>
  </Button>
  

  <Button asChild className='my-5'>
    <Link href='/dashboard'>Generate Images with AI</Link>
  </Button>

  <Button asChild className='my-5'>
    <Link href='/dashboard'>Generate Music with AI</Link>
  </Button>

  <Button asChild className='my-5'>
    <Link href='/dashboard'>Generate Video with AI</Link>
  </Button>

  <Button asChild className='my-5'>
    <Link href='dashboard'>Analyse Documents with AI</Link>
  </Button>

  </div>

      </SheetDescription>
    </SheetHeader>
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
        
        
        <Link href="http://localhost:8000/accounts/login/">
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