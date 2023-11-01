import Link from 'next/link'
import Image from 'next/image'
// import {
//     Menubar,
//     MenubarContent,
//     MenubarItem,
//     MenubarMenu,
//     MenubarSeparator,
//     MenubarShortcut,
//     MenubarTrigger,
//   } from "@/components/ui/menubar"
import { Button } from './ui/button'
  



export const Footer = ()=>{
    return (
        <div>

<div className=' text-white bg-black px-4 py-4  h-auto w-full'>

<div className='flex flex-col md:flex-row lg:flex-row  justify-between
px-2 items-center
 '>

<div className=''>
<div className='relative w-24 h-12'>
        <Link href='/'>
        <Image src="/images/logo.png" alt="logo"  fill />
        </Link>
      </div>

      <div>
       <p className=' py-3'>
       You can reach out using any of the contacts below. Thank you for 
       checking this page.</p>
       
      </div>


      </div>
 
 {/* 2nd Column */}
      <div className='flex flex-col'>
        <p className='text-2xl'>Information</p>
        <Button variant='link' className='text-blue-500' >
            Contact me
        </Button>

        <Button variant='link' className='text-blue-500'>
            See more Projects
        </Button>

        <Button variant='link' className='text-blue-500'>
            About me
        </Button>
      </div>

{/* 3rd Column */}
      <div className='flex flex-col'>
      <p className='text-2xl'>Quick Links</p>
        <Button variant='link'  className='text-blue-500'>
            Service
        </Button>

        <Button variant='link' className='text-blue-500'>
            Terms
        </Button>

        <Button variant='link' className='text-blue-500'>
            Cookies
        </Button>
      </div>

    
      </div>

      <div className='pl-2  mb-3'>
        <p>This portfolio project is owned and managed by Oluwaseun Olatunji.<br />
         </p>
         <p className='py-2'>Copyright 2023. All Rights Reserved.</p>
      </div>

      <div className='flex py-3'>
      <Image src="/images/visa_png.png" alt="logo" height={50} width={50} />
      <Image src="/images/mastcard_logo.jpg" alt="logo" height={50} width={50} />
      </div>

      </div>
        </div>
    )
}