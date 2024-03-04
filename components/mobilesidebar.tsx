import Link from "next/link"
import { Button } from "./ui/button"
import { ScanFaceIcon } from "lucide-react"
import { Navbarlinks } from "./navbarlinks"
import Image from 'next/image'


export const MobileSidebar = ()=>{

    return (
        <div>
            
            <div className="flex gap-2">
            <div className="relative w-16 h-8">
                <Image src='/logo.png' alt='logo' fill />
            </div>

            <p className="font-extrabold">Portfolio</p>
            </div>
            <div>
            <Navbarlinks />
            </div>
           
        </div>
    )

}