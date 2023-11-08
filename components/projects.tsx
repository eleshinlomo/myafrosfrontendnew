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
        projectname: "Fixupe",
        icon: <BotIcon />,
        usecase: "AI tools",
        api: 'OpenAI, Langchain, REST',
        frontend: "Next js/Typescript",
        backend: "Python/Django",
        image: '/projects/fixupenew.png',
        status: 'On-going',
        database: 'postGreSQL/Pinecone',
        cloud: 'Vercel',
        route: 'https://www.fixupe.com'
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
        projectname: "Date Me",
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
        <div>

            <div className='text-center text-black'>
                <p className='leading-8 text-3xl font-extrabold text-black py-8'>PROJECTS</p>
            </div>

<div className='flex flex-col md:flex-row lg:flex-row
         py-6 px-5 gap-10 justify-center items-center '>
          {
            Projects.map((project, index)=>

            <div key={index}>

            <div>
                <Card className='flex flex-col shadow-2xl rounded-2xl
                 hover:shadow-3xl border-blue-600  justify-center text-center
                 transition cursor-pointer delay-75 duration-2000 w-72  md:w-96'
                 >
                <CardHeader className='flex text-md py-4 justify-center
                 items-center gap-2
         font-extrabold w-full'>
        
                {project.icon}
        <p className=' mt-1 '>
            Project Name: {project.projectname}</p>
            
                    </CardHeader>

                    <CardContent className='w-full'>
                    <div className='relative h-52 w-full md:w-full  '>
                    <Image src={project.image} alt='my projects' fill   />  
                    </div>
                    </CardContent>
            
            
            <CardFooter className='flex flex-col w-full justify-center items-center'>
                    
                {/* {showProjectDetails ? */}
                <Sheet>
                <SheetTrigger asChild>
                   <Button> View Details</Button>
                </SheetTrigger>
                
                <SheetContent side='bottom' className='flex flex-col 
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
            <Button className=' mt-2 ' asChild>
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