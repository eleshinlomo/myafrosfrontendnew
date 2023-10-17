import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import MobileSidebar from "./mobile-sidebar"
import Link from 'next/link'


export const Navbar = () => {
  return (
    <div className="flex items-center p-4">
        <MobileSidebar />
        <div className="flex w-full justify-end">
         <Link href='/'>
         <Button>Home</Button>
         </Link>
        </div>
    </div>
  )
}

