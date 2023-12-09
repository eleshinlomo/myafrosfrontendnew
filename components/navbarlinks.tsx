import React from 'react'
import { ProjectsDropDown } from './dropdownmenus'
import Link from 'next/link'

export const Navbarlinks = () => {
  return (
    <div>
        <div className='hidden md:flex gap-3 md:mt-2 font-extrabold'>
                <Link href='/' className='mt-2'>Home</Link>
               <Link href='/' className='mt-2'>About</Link>
               <Link href='/' className='mt-2'>Contact</Link>
               <div className='flex '>
               <ProjectsDropDown /> 
               </div>
               </div>
    </div>
  )
}

