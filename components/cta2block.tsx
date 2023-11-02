import Link from "next/link"
import { Button } from "./ui/button"
import { BotIcon, ComputerIcon, PiIcon } from "lucide-react"

export const Cta2Block = ()=>{
    return (
        <div>
           
            <div>
           <div className=" text-center md:flex md:flex-col md:justify-end 
            md:items-end px-2  gap-3 leading-8 text-muted-foreground ">
                <div className="flex px-2 justify-center  md:justify-end md:items-end
                
                ">
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