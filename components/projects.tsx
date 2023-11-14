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
        <div className='w-full h-full'>

            <div className='text-center text-white'>
                <p className='leading-8 text-3xl font-extrabold
                  py-8'>PROJECTS</p>
            </div>

<div className='flex flex-col md:flex-row lg:flex-row
         py-6 px-2 gap-10 justify-center items-center w-full'>
          {
            Projects.map((project, index)=>

            <div key={index} className=''>

            <div>
                <Card className='flex flex-col shadow-2xl  px-4 
                 hover:shadow-3xl   justify-center items-center text-center w-auto
                 transition cursor-pointer delay-75 duration-2000 '
                 >
                <CardHeader className='flex text-md py-4 justify-center
                 items-center gap-2
         font-extrabold'>
        
                {project.icon}
        <p className=' mt-1 '>
            Project Name: {project.projectname}</p>
            
                    </CardHeader>

                    <CardContent className='px-2 w-72 h-72 md:w-72 '>
                    <div className='relative h-72 w-full md:w-full  '>
                    <Image src={project.image} alt='my projects' fill   />  
                    </div>
                    </CardContent>
            
            
            <CardFooter className='flex flex-col w-full justify-center items-center'>
                    
                {/* {showProjectDetails ? */}
                <Sheet>
                <SheetTrigger asChild>
                   <Button variant='outline' className='rounded-full text-white bg-black '> View Details</Button>
                </SheetTrigger>
                
                <SheetContent side='bottom' className='flex flex-col w-full
                justify-center items-center bg-black text-white text-center font-md'>
                     <div className='relative w-32 h-24 '>
                <Image src='/images/logo.png' alt='logo' className='' fill />
            </div>
            <div>
            <p className='text-xl font-extrabold  '>Project Name: {project.projectname}</p>
            <p className='text-l '>Project Usecase: {project.usecase}</p> 
            <p className='text-l '>Project Frontend: {project.frontend}</p>
            <p className='text-l '>Project Backend: {project.backend}</p>  
            <p className='text-l '>Project Database: {project.database}</p>
            <p className='text-l '>Project Cloud: {project.cloud}</p> 
            <p className='text-l '>Project APIs: {project.api}</p>     
            <p className='text-l '>Project Status: {project.status}</p>
            <Button variant='outline' className='  mt-2 bg-black rounded-full  ' asChild>
                <Link href={project.route} className='animate-pulse'>
                View Project Website
                    </Link>
            </Button>
            </div>
            </SheetContent>
            </Sheet>
            {/* </div>:null */}
            
            

    
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

export default ProjectPage