"use client"
import { NewNavBar } from '@/components/navbar'
import React from 'react'
import Image from 'next/image'
import { Hero } from '@/components/hero'
import { CtaBlockPage } from '@/components/ctablock'
import { Cta2Block } from '@/components/cta2block'
import ProjectPage from '@/components/projects'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'

const HomePage = () => {
  return (
    <div>




      <div className='pt-4'>

<NewNavBar />
        
       <div className='' 
       style={{
        backgroundImage: `url('/bg/load.gif')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        mixBlendMode: 'hard-light',
        backgroundSize: '400px'
        }}
        >
      
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