import { MenuIcon} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { MobileSidebar } from "./mobilesidebar"

export const MobileMenu = ()=>{
    return (
        <div>
            <Sheet>
                <SheetTrigger>
        <Button variant='ghost' size='icon' className="md:hidden" asChild>
            <MenuIcon />
        </Button>
                </SheetTrigger>
                <SheetContent side='left' className="bg-black text-white">
                    <p className="text-2xl">Quick Links</p>

                    <p className="lg py-6">Projects</p>
                    <MobileSidebar />
                </SheetContent>
            </Sheet>
        </div>
    )
}