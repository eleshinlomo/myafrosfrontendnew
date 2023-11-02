import Link from "next/link"
import { Button } from "./ui/button"

export const Cta2Block = ()=>{
    return (
        <div>
            <div className="text-center flex flex-col md:flex-row lg:flex:row gap-5
             bg-white py-8 px-2">

                <div>
                <p className="text-3xl text-blue-800 py-4"> 
                AWS, YES Please!
                </p>
                <p className="text-black py-4">I manage docker images and containers using
                AWS while ensuring only secured ports are exposed</p>
                
                </div>

                <div>
                <p className="text-3xl text-blue-800 py-4 "> 
                Cybersecurity conscious? Apparently, YES!
                </p>
                <p className="text-black py-4 text-center">
                    I follow standards to ensure no data breach occurs or exposed ports
                    are not attacked in app development.
                </p>
                
                </div>

            </div>
        </div>
    )
}