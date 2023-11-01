import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

export const ProjectPage = ()=>{

    const Projects = [
        {
            projectname: "Fixupe",
            info: "AI use cases",
            image: '/projects/fixupe.png',
            status: 'on-going',
            route: 'https://www.fixupe.com/dashboard'
        },
        {
            projectname: "Date Me",
            info: "Dating website",
            image: '/projects/dateme.png',
            status: 'on-going',
            route: 'https://dateme.vercel.app'
        },
       
    ]
    return (
        <div>

<div className='flex flex-col md:flex-row lg:flex-row
         py-2 px-5 gap-3 justify-center items-center bg-white'>
          {
            Projects.map((project, index)=>

            <div key={index}>
         <div className='relative h-72 w-72 md:w-72 md:72 '>
            <Image src={project.image} alt='my projects' fill   />  
            </div>
            <div className='text-center'>
            <p className='text-l text-black'>Project Name: {project.projectname}</p>
            <p className='text-l text-black'>Project Info: {project.info}</p> 
            <p className='text-l text-black'>Project Status: {project.status}</p>
            <Button>
                <Link href={project.route}>View Project Website</Link>
            </Button>

            </div>
            </div>
            
    
            )
         } 

         
          

         </div>
        </div>
    )
}