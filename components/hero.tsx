import { BotIcon, ComputerIcon, MailPlusIcon, PiIcon } from "lucide-react"
import Image from 'next/image'
import { CtaBlockPage } from "./ctablock"

export const Hero = ()=>{
    return (
        <div>

            

           <div className="text-center lin
           leading-8 py-8 mt-16 flex flex-col md:justify-end md:items-end">
           <p className="  text-xl font-bold
           md:text-2xl  ">
            My name is 
            Oluwaseun Olatunji!
            </p>

    

            <div className=" text-center md:flex md:flex-col md:justify-end 
            md:items-end px-2  gap-3 ">
                <div className="flex px-2 justify-center  md:justify-end md:items-end">
                <BotIcon />
                <p className=" ">I use mostly React Based Frameworks on Frontend/Typescript</p>
                </div>

                <div className="flex px-2 justify-center    md:justify-end md:items-end">
                <PiIcon />
                <p className="">Backend I mostly use Python/Django & Node js</p>
                </div>
                <div className="flex justify-center   md:justify-end md:items-end">
                <PiIcon />
                <p className="">Databases: Postgres, Mysql, and MongoDB/Atlas</p>
                </div>

                <div className="flex justify-center md:flex  md:justify-end md:items-end">
                <ComputerIcon />
                <p className="">
                    Docker and Rabbit for cloud production
                </p>
                </div>

       
            </div>
           </div>
              
             

        </div>
    )
}