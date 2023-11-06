"use client"

import {useState, useEffect} from 'react'
import { Menu} from "lucide-react"
import { Button } from "./ui/button"
import Sidebar from "./sidebar"
import { SheetContent, Sheet, SheetTrigger } from "./ui/sheet"


const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(()=>{
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    
      <Sheet>
        <SheetTrigger>
         <Button variant='ghost' size='icon' 
         className="md:hidden"
         asChild
         >
            <Menu />
        </Button>
        </SheetTrigger>
        <SheetContent side='left' className="bg-black p-0" >
          <Sidebar />
        </SheetContent>
        </Sheet>
    
  )
}

export default MobileSidebar