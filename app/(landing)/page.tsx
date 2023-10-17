"use client"
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

 <div className="flex flex-col flex-1 justify-center items-center p-4">
  <p className=" mt-20">Do everything with AI</p>
  <h6 className="p-4 mt-10">While we are currently busy moving things around and
     adding new features to our website,
  
    feel free to sign up and enjoy all the AI services we offer.
  </h6>
 </div>

 <div>
  <h1>MY AFROS - WE ARE REBRANDING</h1>
  <h2 className="mt-5 text-base ">SIGN UP TAKES 1 MIN</h2>
 </div>

      
    <div className="h-full  flex  justify-center items-center gap-3 z-10">
        
        
        <Link href="/dashboard">
        <Button>
         Sign In
        </Button>
        </Link>

        <Link href="/dashboard">
        <Button>
         Sign Up
        </Button>
        </Link>

        

        
        
    </div>
    </div>
    
  )
}

export default LandingPage