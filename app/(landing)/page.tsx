"use client"
import { NewNavBar } from '@/components/navbar'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import  Hero  from '@/components/hero'
import { CtaBlockPage } from '@/components/ctablock'
import ProjectPage from '@/components/projects'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'
import { Col3Cta } from '@/components/skillsets'
import  Typewriter  from '@/components/typewriter'
import Ctawithrightpic from '@/components/ctawithrightpic'

const HomePage = () => {
  

  return (
    
    <div>

      
      <div className=' overflow-hidden flex flex-col justify-center  bg-gray-900'>

      
      
      <Hero />
      <Col3Cta />
      <ProjectPage />
      <Ctawithrightpic />
      
      
      </div>
      
      </div>
    
  )
}

export default HomePage