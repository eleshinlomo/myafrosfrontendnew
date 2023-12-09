import { BotIcon, BriefcaseIcon, ComputerIcon, MailPlusIcon, PiIcon } from "lucide-react"
import Image from 'next/image'
import { CtaBlockPage } from "./ctablock"
import { Button } from "./ui/button"

export const Hero = ()=>{
    return (
        <div>



<div className="h-auto md:flex justify-between items-center mx-2
            bg-gray-900 text-white rounded-2xl">

<div className="md:h-72 w-full  grid grid-rows-2 md:grid-cols-2 mx-0">

<div className="px-3 pb-2">
<h1 className="py-4 font-arial font-extrabold ">PORTFOLIO</h1>
<p className="flex-wrap text-start  pr-8">
Crafting innovative solutions and pushing the boundaries of design 
and technology to deliver 
meaningful and impactful projects. Explore the portfolio to discover a 
collection of works, reflecting commitment to excellence, 
attention to detail, and a relentless pursuit of excellence. 
Let&apos;s collaborate and turn ideas into extraordinary experiences.</p>
           
<div className="flex flex-col md:flex-row pt-8 gap-3">
<Button variant='outline' 
className=" text-black" 
  >LET&apos;S BUILD SOMETHING GREAT</Button>
<Button variant='outline' className="  text-black ">
    SEE MORE
</Button>
</div> 
</div>
 
           
<div className="relative  w-full h-auto md:h-72">
<Image src='/qr-code-8644.gif' alt='woman' fill />
</div>

    </div>


           </div>

        </div>
    )
}