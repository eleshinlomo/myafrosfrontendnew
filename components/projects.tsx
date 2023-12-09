// components/useState
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { BotIcon} from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
  


export const Projects = [
    {   
        id:1,
        projectname: "Fixupe(AI)",
        icon: <BotIcon />,
        usecase: "AI tools",
        api: 'OpenAI, Langchain, REST',
        frontend: "Next js/Typescript",
        backend: "Python/Django",
        image: '/images/girl10.png',
        status: 'On-going',
        database: 'postGreSQL/Pinecone',
        cloud: 'Vercel',
        route: 'https://www.fixupe.com'
    },

    {    
        id:2,
        projectname: "Solarit(AI)",
        icon: <BotIcon />,
        api: 'REST',
        usecase: "Knowledgebase",
        frontend: "Next Js",
        backend: "Python/Django",
        image: '/projects/solar_pic2.jpg',
        status: 'On-going',
        database: 'PostgreSQL',
        cloud: 'AWS',
        route: 'https://solarit.vercel.app/'
    },

    {    
        id:2,
        projectname: "Techcoy",
        icon: <BotIcon />,
        api: 'REST',
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
        id:3,
        projectname: "Date Me(AI)",
        icon: <BotIcon />,
        usecase: "Dating Platform",
        api: 'OpenAI, Langchain, REST',
        frontend: "Next js/Typescript",
        backend: "Python/Django",
        image: '/projects/dateme.png',
        database: 'postGreSQL/Pinecone',
        cloud: 'Vercel',
        status: 'On-going',
        route: 'https://dateme.vercel.app'
    },
   
]





const ProjectPage = ()=>{
 

        const [showProjectDetails, setShowProjectDetails] = useState<Boolean>(false)
        
        
        const openDetails = ()=>{
            setShowProjectDetails(true)
        }
        
        const closeDetails = ()=>{
            setShowProjectDetails(false)
        }


    return (
        <div className='w-full h-full bg-gray-900 text-white'>

            <div className='text-center'>
                <p className='leading-8 text-3xl font-extrabold
                  py-8'>PROJECTS</p>
            </div>

<div className=' grid grid-flow-row  md:grid-cols-4
         py-8 px-6  w-full gap-3'>
          {
            Projects.map((project, index)=>

            <div key={index} className=''>

            <div>
                <Card className='grid grid-flow-row  md:grid-flow-row
                gap-3 rounded-2xl bg-gray-900
                     text-center  w-full md:w-72 h-auto md:ml-10 
                 '
                 >
                <CardHeader className=''>
                <div className='flex justify-center items-center gap-0 
                flex-1 font-extrabold'>
               
        <p className='text-white'>
            Project Name: {project.projectname}</p>
            </div>
                    </CardHeader>

                    <CardContent className=' w-full   '>
                    <div className='relative h-44 w-full '>
                    <Image src={project.image} alt='my projects' fill   />  
                    </div>

                    {/* {showProjectDetails ? */}
                <Sheet>
                <SheetTrigger asChild>
                   <Button variant='outline' 
                   className='rounded-full bg-black text-white py-4 '> 
                   View Details</Button>
                </SheetTrigger>
                
                <SheetContent side='bottom' className='flex flex-col w-full
                justify-center items-center  text-center font-md'>
                     <div className='relative w-32 h-24 '>
                <Image src='/images/logo.png' alt='logo' className='' fill />
            </div>
            <div className='text-black'>
            <p className='text-xl font-extrabold  '>Project Name: {project.projectname}</p>
            <p className='text-l '>Project Usecase: {project.usecase}</p> 
            <p className='text-l '>Project Frontend: {project.frontend}</p>
            <p className='text-l '>Project Backend: {project.backend}</p>  
            <p className='text-l '>Project Database: {project.database}</p>
            <p className='text-l '>Project Cloud: {project.cloud}</p> 
            <p className='text-l '>Project APIs: {project.api}</p>     
            <p className='text-l '>Project Status: {project.status}</p>
            <Button variant='outline' className='  mt-2 bg-blue-900
             rounded-full bg-black/80 text-white  ' asChild>
                <Link href={project.route} className='animate-pulse'>
                View Project Website
                    </Link>
            </Button>
            </div>
            </SheetContent>
            </Sheet>
                    </CardContent>
             
                </Card>
            </div>


            </div>
            
    
            )
         } 

         
          

         </div>
        </div>
    )
}

export default ProjectPage