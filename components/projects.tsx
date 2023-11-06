import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { BotIcon } from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  


export const Projects = [
    {
        projectname: "Fixupe",
        icon: <BotIcon />,
        usecase: "AI tools",
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
        icon: <BotIcon />,
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
        icon: <BotIcon />,
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

export const ProjectPage = ()=>{

    return (
        <div>

            <div className='text-center'>
                <p className='leading-8 text-3xl font-extrabold text-black py-8'>PROJECTS</p>
            </div>

<div className='flex flex-col md:flex-row lg:flex-row
         py-6 px-5 gap-10 justify-center items-center '>
          {
            Projects.map((project, index)=>

            <div key={index}>

            <div>
                <Card className='flex flex-col bg-black text-white rounded-2xl
                 hover:shadow-md hover:bg-white hover:text-black 
                 transition cursor-pointer w-96'>
                <CardHeader className='flex text-md py-4 justify-center
                 items-center gap-2
         font-extrabold w-full'>
        
                {project.icon}
        <p className=' mt-1 '>
            Project Name: {project.projectname}</p>
            
            
                    </CardHeader>

                    <CardContent>
                    <div className='relative h-72 w-full md:w-full  '>
                    <Image src={project.image} alt='my projects' fill   />  
                    </div>
                    </CardContent>

                    <CardFooter className='flex flex-col'>
                    
            
            <p className='text-l '>Project Usecase: {project.usecase}</p> 
            <p className='text-l '>Project Frontend: {project.frontend}</p>
            <p className='text-l '>Project Backend: {project.backend}</p>  
            <p className='text-l '>Project Database: {project.database}</p>
            <p className='text-l '>Project Cloud: {project.cloud}</p>    
            <p className='text-l '>Project Status: {project.status}</p>
            <Button className='bg-blue-800 mt-2 ' asChild>
                <Link href={project.route}>View Project Website</Link>
            </Button>

    
             </CardFooter>
                </Card>
            </div>


            </div>
            
    
            )
         } 

         
          

         </div>
        </div>
    )
}