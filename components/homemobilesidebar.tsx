import Link from "next/link"
import { Projects } from "./projects"
import { Button } from "./ui/button"
import { ScanFaceIcon } from "lucide-react"


export const HomeMobileSidebar = ()=>{

    return (
        <div>
            {Projects ?
            <div>
            {Projects.map((project, index)=>
             
             <div key={index}>
            <Button variant='ghost' size='icon'>
            {project.icon}
            </Button>

            <Button variant='ghost' className="" asChild>
                <Link href={project.route}>{project.projectname}</Link>
            </Button>
            
            </div>

            )}
            
            </div>:null

            }
        </div>
    )

}