import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export const Cta2Block = ()=>{
    return (
        <div>
            <Card className=" flex flex-col md:flex-row  gap-5
             bg-white py-8 px-2">
              
              <CardContent className="flex flex-col justify-center items-center
              md:flex-row md:justify-around
              ">
                <div className="text-center">
                <p className="text-3xl py-4"> 
                AWS, YES Please!
                </p>
                <p className=" py-4">I manage docker images and containers using
                AWS while ensuring only secured ports are exposed</p>
                
                </div>

                <div className="text-center">
                <p className="text-3xl py-4 "> 
                Cybersecurity conscious? Apparently, YES!
                </p>
                <p className=" py-4 ">
                    I follow standards to ensure no data breach occurs or exposed ports
                    are not attacked in app development.
                </p>
                
                </div>
                </CardContent>

            </Card>
        </div>
    )
}