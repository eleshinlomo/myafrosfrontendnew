import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { GithubIcon, GitlabIcon, LinkedinIcon } from 'lucide-react'




  
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
        info: 'This is a portfolio project',
        github: 'https://github.com/eleshinlomo/myafrosfrontendnew',
        others: 'Projects'
    },

]


export const Footer = ()=>{
    return (
        <div>

<div className=' text-white  bg-black px-6 py-12   w-full'>
  <p className='text-center text-2xl mb-2'>Quick Links</p>
  

{ footerItems ?
<div>
  {footerItems.map((footer: any, index: any)=>

   <div key={index} className='flex flex-col gap-8 md:flex-row text-center
    md:justify-between items-center'>

    {/* First Column */}
    <div className=''>
    {/* <div className='relative h-8 w-8 my-2'>
    <Image src={footer.logo} alt='logo' fill />
    </div> */}
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
    
    <div className='flex justify-center gap-5 py-4'>
    <a href='https://www.linkedin.com/in/olatunjioluwaseun/'>
    <Button size='icon' className='w-6 h-6' asChild>
      <LinkedinIcon />
      </Button>
      </a>

      <a href='https://github.com/eleshinlomo'>
    <Button size='icon' className='w-6 h-6' asChild>
      <GithubIcon />
      </Button>
      </a>

      <a href='https://gitlab.com/eleshinlomo'>
    <Button size='icon' className='w-6 h-6' asChild>
      <GitlabIcon />
      </Button>
      </a>
      </div>

    </div>

    


    {/* Third Column */}
    <div className='text-blue-800 flex flex-col mt-5 md:mt-0'>
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