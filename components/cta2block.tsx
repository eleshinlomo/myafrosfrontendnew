import Link from "next/link"
import { Button } from "./ui/button"

export const Cta2Block = ()=>{
    return (
        <div>
            <div className="text-center flex flex-col justify-between md:flex-row 
            lg:flex:row gap-5
             bg-white py-8 px-4">

                <div>
                <p className="text-3xl text-black py-4"> 
                What I am currently working on
                </p>
                <p className="text-black py-4">I have been working on AI and
                 machine learning projects recently</p>
                <Button variant='link'   asChild>
                <Link href='' className="text text-pink-800 text-2xl py-4 ">
                See current projects
                </Link>
                </Button>
                </div>

                <div>
                <p className="text-3xl text-black py-4 "> 
                Thrilled to work on exciting projects
                </p>
                <p className="text-black py-4 text-center">
                I currenly work with a team of 4 on Fullstack project</p>
                <Button variant='link'   asChild>
                <Link href='' className="text text-pink-800 text-2xl py-4 ">
                See more
                </Link>
                </Button>
                </div>

            </div>
        </div>
    )
}