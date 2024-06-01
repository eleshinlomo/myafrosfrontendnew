"use client"
import { BotIcon, BriefcaseIcon, ComputerIcon, MailPlusIcon, PiIcon } from "lucide-react"
import Image from 'next/image'
import { CtaBlockPage } from "./ctablock"
import { Button } from "./ui/button"
import {useEffect, useState} from 'react'
import  Typewriter  from "@/components/typewriter"

const Hero = ()=>{

    const [customText, setCustomText] = useState<Array<string>>([])

  useEffect(()=>{
    setCustomText(
      [
        "Advance AI Models",
        "Innovative ML Approach",
        "Modern Technologies"
      ]
    )
  }, [])

    return (
        <div>



<div className="h-auto flex flex-col justify-between   
            bg-black text-white ">

<div>
<Typewriter customText={customText} />
</div>

<div className="md:h-96 w-full  grid grid-rows-2 
 md:grid-cols-2  mx-0 ">



<div className="relative  w-full h-auto md:h-96">
<Image src='/program-3460032_1920.jpg' alt='woman' fill />
</div>

<div className="px-3 pb-2">

<div className="border-b border-white w-1/6 my-3">
<h1 className="py-4 font-arial font-extrabold w-1/6">PORTFOLIO</h1>
</div>


<p className="flex-wrap text-start  pr-8 ">
With a blend of technical expertise and a knack for elegant design, 
I thrive on transforming complex ideas into intuitive software applications. 
Whether it&apos;s building robust web platforms, developing scalable mobile apps, 
or diving into the realm of machine learning, I am committed to pushing the 
boundaries 
of technology to create meaningful experiences and solve real life problems.</p>


<div className="flex flex-col md:flex-row pt-8 gap-3 ">
<a href='https://fixupe.com'>
<Button variant='outline' size='sm'
className=" text-black  w-full" 
  >CRM WITH AI</Button>
  </a>
<a href='https://imgbot.vercel.app'>
<Button variant='outline' size='sm' className="  text-black w-full  ">
    GENERATE IMAGE
</Button>
</a>
</div> 
</div>
 
           


    </div>


           </div>

        </div>
    )
}

export default Hero