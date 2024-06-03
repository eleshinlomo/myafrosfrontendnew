import React from 'react'
import Image from 'next/image'

export const About = () => {
  return (
    <div>

<div className='mt-12  flex flex-col flex-wrap 
                        flex-1 w-auto gap-4 px-6 text-black'>

<div className=' md:flex flex-1 gap-2 pb-4'>
<div className="p-6">
  <h1 className="text-3xl font-bold mb-4">About page</h1>
  <p className="text-lg mb-4">
    MyAfros is a dynamic portfolio web application showcasing a 
    comprehensive array of personal projects meticulously 
    crafted. Explore working tools spanning from robust CRM systems to 
    cutting-edge Transcriber and innovative Image-generating bot. 
    Each project embodies a blend of creativity, functionality, 
    and technical prowess.
  </p>
  <p className="text-lg mb-4">
    These projects cater to a diverse spectrum of needs, 
    catering to both nascent startups and established enterprises alike. 
    With a focus on delivering tangible value and efficiency, 
    MyAfros stands as a testament to my dedication to innovation and 
    excellence in software development.
  </p>
</div>
                            
    <div className='relative w-full  h-72'>
    <Image src='/boxes.png' alt='a man&apos;s picture' fill />
    </div>
    </div>

                        </div>
    </div>
  )
}

