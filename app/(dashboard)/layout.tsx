"use client"

import {useState, useEffect} from 'react'
import Sidebar from "@/components/sidebar";
import {Navbar} from "@/components/navbar";
import { Button } from '@/components/ui/button';
import  Link  from 'next/link';
import PropTypes from 'prop-types'
import { authChecker } from '@/components/auth';



const DashboardLayout = ({
    
    children
}: {
    children: React.ReactNode;
})=>{

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [user, setUser] = useState(null)

  // Check Authentication

  useEffect(()=>{
    try{
    const response: any = authChecker()
    if (! response)throw new Error("Server error") 
      setUser(response.message)
    console.log(user)
      setIsLoggedIn(true)
    
  }
  catch(err){
    console.log(err)
  }

  }, [])  
 

    return(
         <div>
            { isLoggedIn ?
        <div className="h-full relative">
            <div className="hidden h-full md:flex   md:w-72 md:flex-col
             md:fixed md:inset-y-0 z-[80] bg-black">

                <Sidebar />
            </div>
            
           <main className="md:pl-72">
            <Navbar />
            {children}
           </main>
        </div>:

        <div className=''>
            <p>You need to be logged in</p>
            <Link href='/'>
            <Button>Back to home</Button>
            </Link>
            </div>

         }
        </div>
    )
}

DashboardLayout.PropTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default DashboardLayout



