import React from 'react'
import Image from 'next/image'

export const About = () => {
  return (
    <div>

<div className='mt-12  flex flex-col flex-wrap 
                        flex-1 w-auto gap-4 px-6 text-black'>
<h2>ABOUT PAGE</h2>

<div className=' md:flex flex-1 gap-2 pb-4'>
<p className='w-full  md:mr-16 flex flex-wrap'>
A passionate Software Engineer with a knack 
                            for turning ideas into robust, scalable, and user-friendly 
                            solutions. 
                            My journey in the world of coding began with a 
                            curiosity to understand the magic behind technology, 
                            and it has evolved into a commitment to crafting high-quality software.
                            </p>
                            
    <div className='relative w-full  h-72'>
    <Image src='/boxes.png' alt='a man&apos;s picture' fill />
    </div>
    </div>

                        </div>
    </div>
  )
}

