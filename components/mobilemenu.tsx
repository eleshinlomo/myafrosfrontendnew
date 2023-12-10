import { MenuIcon} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { MobileSidebar } from "./mobilesidebar"
import { Navbarlinks } from "./navbarlinks"
import Link from 'next/link'


export const MobileMenu = ()=>{
    return (
        <div>
            <Sheet>
                <SheetTrigger >
           <Button size='icon' asChild className="md:hidden">
            <MenuIcon />
            </Button>
        
                </SheetTrigger>
            
                <SheetContent side='left' className=" bg-gray-900">
                    <div>
                        <MobileSidebar />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}



