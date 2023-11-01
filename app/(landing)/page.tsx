import { NewNavBar } from '@/components/newnavbar'
import React from 'react'
import Image from 'next/image'
import { Hero } from '@/components/hero'
import { CtaBlockPage } from '@/components/ctablock'
import { Cta2Block } from '@/components/cta2block'
import {ProjectPage} from '@/components/projects'
import { Footer } from '@/components/footer'

const HomePage = () => {
  return (
    <div>



      <div className='relative  text-white md:text-white
      '>

<div className='absolute h-[90vh] w-full z-[-20] opacity-100 md:opacity-100 '>
          <Image src= '/bg/background-6824.gif' alt='bg image' fill  />
        </div>
        
       <div className='md:px-24 px-4'>
      <NewNavBar />
      <Hero />
      
      <Cta2Block />
      < ProjectPage />
      
      </div>
      <Footer />
      </div>
    </div>
  )
}

export default HomePage