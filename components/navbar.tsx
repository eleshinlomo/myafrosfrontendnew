
import Image from 'next/image'
import { Button } from './ui/button'
import { MobileMenu } from './mobilemenu'
import { getDateToday } from './date'
import Link from 'next/link'
import { ArrowBigDown, ArrowBigRight } from 'lucide-react'
import { ProjectsDropDown } from './dropdownmenus'
import { Navbarlinks } from './navbarlinks'

export const NewNavBar = ()=>{

    const date = getDateToday()

    return (
        <div>
            

            <div className='py-5 relative shadow-3xl flex flex-1 justify-between
            md:justify-around  px-4 bg-black '>
                
                <div className='hidden md:flex relative w-24 h-12 rounded-full   '>
                    <Image src='/logo.png' alt='logo' fill />
                </div>

                {/* <div className='mt-2 shadow-2xl bg-white rounded-full py-2 px-2'>
                 <p className='text-black'>
                   Date: {date}
                 </p>
                </div> */}

                <div className=''>
                 <MobileMenu />
                </div>
                
                <div className='hidden md:flex'>
                <Navbarlinks />
                </div>
            </div>


        </div>
    )
}