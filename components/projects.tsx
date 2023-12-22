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
        <div className='w-auto h-full bg-gradient-r 
        from-black via-white to-gray-100 text-black shadow-2xl'>

            <div className='text-center'>
                <p className='leading-8 text-white text-sm md:text-2xl 
                font-extrabold 
                  pt-8'>PROJECTS</p>
            </div>

<div className=' h-auto w-auto grid grid-row-flow  
md:grid-cols-3
place-items-center 
         py-8 px-1   gap-2'>
          {
            Projects.map((project, index)=>

            <div key={index} className=''>

            <div>
                <Card className='
                gap-3 rounded-2xl 
                     text-center  w-72 sm:w-72 md:w-44 h-72 
                     shadow-2xl bg-gray-200
                 '
                 >
                <CardHeader className=''>
                <div className=' font-extrabold'>
               <p className=''>
            Project Name: {project.projectname}</p>
        
            </div>
            </CardHeader>
         
                    <CardContent className=''>

                    

                    {/* {showProjectDetails ? */}
                <Sheet>
                <SheetTrigger className='mb-3' asChild>
                  <div className='flex flex-col justify-center items-center'>
                  <div className='relative h-32 w-32 md:w-32'>
                    <Image src={project.image} alt='my projects' fill   />  
                    </div>
                   <div className='h-1/2 w-auto'>
                   <Button variant='outline' 
                   className='rounded-full bg-black text-white py-4 '> 
                   {project.projectname === "Fixupe(AI)"? <div>
                    <p>View Details</p>
                    <p className='text-red-500 animate-pulse'>NEW</p>
                   </div> :
                   "View Details"}</Button>
                   </div>
                   </div>
                </SheetTrigger>
                
                <SheetContent side='bottom' className='flex flex-col w-full
                justify-center items-center bg-gray-900  
                text-center text-white font-md'>
                     <div className='relative w-32 h-12 shadow-2xl '>
                <Image src='/images/logo.png' alt='logo' className='' fill />
            </div>
            <div className=''>
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