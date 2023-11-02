import { BotIcon, ComputerIcon, MailPlusIcon, PiIcon } from "lucide-react"
import Image from 'next/image'
import { CtaBlockPage } from "./ctablock"

export const Hero = ()=>{
    return (
        <div>

            
           <div className="  text-white py-8 flex flex-col 
           justify-center items-center">

           <div className="py-4 text:1xl  md:text-2xl font-extrabold ">
                <p>WELCOME TO MY PORTFOLIO PAGE</p>
            </div>


           <div className="text-center
           leading-8 py-8 mt-16 flex flex-col md:justify-end md:items-end">
           <p className="  text-lg font-bold
           md:text-xl">
            See on-going projects below
            </p>
           </div>
              
           </div>

        </div>
    )
}