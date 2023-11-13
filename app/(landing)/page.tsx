"use client"
import { NewNavBar } from '@/components/navbar'
import React from 'react'
import Image from 'next/image'
import { Hero } from '@/components/hero'
import { CtaBlockPage } from '@/components/ctablock'
import ProjectPage from '@/components/projects'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'
import { Col3Cta } from '@/components/col3scta'
import  Typewriter  from '@/components/typewriter'

const HomePage = () => {
  return (
    <div>



      
      <div className='pt-4'>

      <NewNavBar />
        
       <div 
       
      className='' 
      //  style={{
      //   backgroundImage: `url('/bg/load.gif')`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'top',
      //   mixBlendMode: 'hard-light',
      //   backgroundSize: '400px'
      //   }}
        >
      <Typewriter />
      <Hero />
      <Col3Cta />
      <ProjectPage />
      
      
      </div>
      <Footer />
      </div>
    </div>
  )
}

export default HomePage