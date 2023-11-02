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




      <div className=' px-4 py-4 bg-black'>

<NewNavBar />
        
       <div className=' '>
      
      <Hero />
      
      <CtaBlockPage />
      < ProjectPage />
      <Cta2Block />
      
      </div>
      <Footer />
      </div>
    </div>
  )
}

export default HomePage