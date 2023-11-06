import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { GithubIcon } from 'lucide-react'




  
const footerItems: any = [
    
      {
        
        logo:  '/images/logo.png',
        myafrosurl: 'https://myafros.com',
        copyright: `
        ${'Copyright © '} ${new Date().getFullYear()}`,
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

<div className=' text-white  bg-black px-6 py-8  h-auto w-full'>
  <p className='text-center text-2xl mb-2'>Quick Links</p>
  

{ footerItems ?
<div>
  {footerItems.map((footer: any, index: any)=>

   <div key={index} className='flex flex-col md:flex-row text-center
    md:justify-between items-center'>

    {/* First Column */}
    <div className=''>
    <div className='relative h-12 w-full my-2'>
    <Image src={footer.logo} alt='logo' fill />
    </div>
    <Button className='my-4' asChild>
    <Link href={footer.github}>View Code on Github</Link>
    </Button>
    <div className='flex'>

    <div className='relative h-24 w-24'>
      <Image src="/images/visa_png.png" alt="logo" fill />
      </div>
      <div className='relative h-24 w-24'>
      <Image src="/images/mastcard_logo.jpg" alt="logo" fill />
      </div>

      </div>
    </div>
    
    {/* Second Column */}
    <div className='text-blue-800 flex flex-col h-24'>
      <p className='text-white'>Information</p>
    <p>{footer.contact}</p>
    <p>{footer.about}</p>
    </div>


    {/* Third Column */}
    <div className='text-blue-800 flex flex-col h-24'>
    <p className='text-white'>Terms</p>
    <Link href={footer.privacy}>Privacy</Link>
    <Link href={footer.terms}>Terms</Link>
    </div>


    {/* Fourth Column */}
    <div className='h-24'>
      <p>{footer.info}</p>
      <div>
      <p>{footer.copyright}</p>
      <a href={footer.myafrosurl}  className='text-blue-800'>My Afros</a>
      </div>
      
    </div>

    </div>
  )}
  </div>:null
}

</div>
        </div>
    )
}