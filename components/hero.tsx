import { BotIcon, BriefcaseIcon, ComputerIcon, MailPlusIcon, PiIcon } from "lucide-react"
import Image from 'next/image'
import { CtaBlockPage } from "./ctablock"

export const Hero = ()=>{
    return (
        <div>

            
           <div className="   py-8 flex flex-col 
           justify-center items-center">

           <div className="py-4 text-sm flex gap-1 md:gap-2 text-black md:text-2xl font-extrabold ">
                <p>WELCOME TO MY PORTFOLIO PAGE </p>
                <BriefcaseIcon className="md:mt-1" />
            </div>

              
           </div>

        </div>
    )
}