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

<div className=' grid grid-flow-row  md:grid-cols-4
         py-8 px-6  w-full gap-3'>
          {
            Projects.map((project, index)=>

            <div key={index} className=''>

            <div>
                <Card className='grid grid-flow-row  md:grid-col-4 rounded-2xl 
                     text-center  w-full md:w-72 h-96 md:ml-10 
                 '
                 >
                <CardHeader className=''>
                <div className='flex justify-center items-center gap-0 flex-1 font-extrabold'>
               
        <p className=''>
            Project Name: {project.projectname}</p>
            </div>
                    </CardHeader>

                    <CardContent className=' h-64 w-full   '>
                    <div className='relative h-full w-afull '>
                    <Image src={project.image} alt='my projects' fill   />  
                    </div>
                    </CardContent>
            
            
            <CardFooter className='flex flex-col w-full justify-center items-center'>
                    
                {/* {showProjectDetails ? */}
                <Sheet>
                <SheetTrigger asChild>
                   <Button variant='outline' className='rounded-full text-white bg-black'> 
                   View Details</Button>
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