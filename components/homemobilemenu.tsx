import { MenuIcon} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { HomeMobileSidebar } from "./homemobilesidebar"

export const HomeMobileMenu = ()=>{
    return (
        <div>
            <Sheet>
                <SheetTrigger>
        <Button variant='ghost' size='icon' className="md:hidden" asChild>
            <MenuIcon />
        </Button>
                </SheetTrigger>
                <SheetContent side='right' className="bg-black text-white">
                    <p className="text-2xl">Quick Links</p>

                    <p className="lg py-6">Projects</p>
                    <HomeMobileSidebar />
                </SheetContent>
            </Sheet>
        </div>
    )
}