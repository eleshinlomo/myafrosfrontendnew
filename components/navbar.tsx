import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import MobileSidebar from "./mobile-sidebar"


export const Navbar = () => {
  return (
    <div className="flex items-center p-4">
        <MobileSidebar />
        <div className="flex w-full justify-end">
         <Button>Sign in</Button>
        </div>
    </div>
  )
}

