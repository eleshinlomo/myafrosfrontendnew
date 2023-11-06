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
import { GithubIcon } from 'lucide-react'
  
const footerItems: any = [
    
      {
        logo:  '/images/logo.png',
        copyright: `${'Copyright © '} ${new Date().getFullYear()} My Afros`,
        contact: 'Contact me',
        about: 'About me',
        projects: 'See more projects',
        privacy: '/privacy',
        terms: '/terms',
        info: 'This portfolio project is owned and managed by Oluwaseun Olatunji',
        github: 'https://github.com/eleshinlomo/myafrosfrontendnew',
        others: 'Projects'
    },

]


export const Footer = ()=>{
    return (
        <div>

<div className=' text-white bg-black px-6 py-8  h-auto w-full'>
  <p className='text-center text-2xl mb-2'>Quick Links</p>

{ footerItems ?
<div>
  {footerItems.map((footer: any, index: any)=>

   <div key={index} className='flex flex-col md:flex-row text-center
    md:justify-between items-center'>

    {/* First Column */}
    <div className=''>
    {/* <div className='relative h-8 w-12 my-4'>
    <Image src={footer.logo} alt='logo' fill />
    </div> */}
    <p>{footer.others}</p>
    <Button className='my-4' asChild>
    <Link href={footer.github}>View Code on Github</Link>
    </Button>
    
    </div>
    
    {/* Second Column */}
    <div className='text-blue-800 flex flex-col'>
    <p>{footer.contact}</p>
    <p>{footer.about}</p>
    <Link href={footer.privacy}>Privacy</Link>
    <Link href={footer.terms}>Terms</Link>
    </div>


    {/* Third Column */}
    <div>
      <p>{footer.info}</p>
      <p>{footer.copyright}</p>
      
    </div>

    </div>
  )}
  </div>:null
}

</div>
        </div>
    )
}