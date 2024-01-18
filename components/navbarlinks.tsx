import React from 'react'
import { ProjectsDropDown } from './dropdownmenus'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import Image from 'next/image'
import { About } from './about'
import { Contact } from './contact'

export const Navbarlinks = () => {
  return (
    <div>
                <div className='flex flex-col mt-12 md:flex-row gap-3 md:mt-2 font-extrabold'>
                <Link href='/' className='mt-2'>Home</Link>
                <Link href='/aboutpage' className='mt-2'>About</Link>
                <Link href='/contactpage' className='mt-2'>Contact</Link>
               
               <div className='flex '>
               <ProjectsDropDown /> 
               </div>
               </div>
    </div>
  )
}

