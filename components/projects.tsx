import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

export const ProjectPage = ()=>{

    const Projects = [
        {
            projectname: "Fixupe",
            position: 1,
            usecase: "Task tools",
            frontend: "Next js/Typscript",
            backend: "Python/Django",
            image: '/projects/fixupenew.png',
            status: 'On-going',
            database: 'postGreSQL/Pinecone',
            cloud: 'Vercel',
            route: 'https://www.fixupe.com'
        },
        {
            projectname: "Techcoy",
            position: 2,
            usecase: "Blog",
            frontend: "Wordpress",
            backend: "Not Applicable",
            image: '/projects/techoynew.png',
            status: 'Completed',
            database: 'Not Applicable',
            cloud: 'AWS',
            route: 'https://www.techcoy.com/'
        },
        {
            projectname: "Date Me",
            position: 3,
            usecase: "Dating Platform",
            frontend: "Next js/Typscript",
            backend: "Python/Django",
            image: '/projects/dateme.png',
            database: 'postGreSQL/Pinecone',
            cloud: 'Vercel',
            status: 'On-going',
            route: 'https://dateme.vercel.app'
        },
       
    ]
    return (
        <div>

            <div className='text-center'>
                <p className='leading-8 text-3xl font-extrabold text-black py-8'>PROJECTS</p>
            </div>

<div className='flex flex-col md:flex-row lg:flex-row
         py-6 px-5 gap-20 justify-center items-center '>
          {
            Projects.map((project, index)=>

            <div key={index} className='flex flex-col gap-2'>
        <p className='text-l text-center text-white pl-2 font-extrabold w-72 bg-blue-800 '>
            Project Name: {project.projectname}</p>
         <div className='relative h-72 w-72 md:w-72 md:72 '>
            <Image src={project.image} alt='my projects' fill   />  
            </div>
            <div className='text-center'>
            
            <p className='text-l '>Project Usecase: {project.usecase}</p> 
            <p className='text-l '>Project Frontend: {project.frontend}</p>
            <p className='text-l '>Project Backend: {project.backend}</p>  
            <p className='text-l '>Project Database: {project.database}</p>
            <p className='text-l '>Project Cloud: {project.cloud}</p>    
            <p className='text-l '>Project Status: {project.status}</p>
            <Button className='bg-blue-800 mt-2' asChild>
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