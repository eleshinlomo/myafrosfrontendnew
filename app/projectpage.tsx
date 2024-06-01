import { Projects } from '@/components/projectdata'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'


const ProjectsPage = ()=> {
    return (
      <section className="relative text-black">
  
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute left-0 right-0 bottom-0 m-auto 
        w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
  
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-4
            text-muted-foreground font-extrabold">
              <h2 className="h2 mb-4">One login gives you access to all the apps
              </h2>
              <p className="text-xl text-white">
                {'Myafros Apps'.toUpperCase()}</p>
            </div>
  
            
            <div  className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              
              {/* Projects */}
            {Projects?.map((project, index)=>
              
              
              <div key={index} className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                    <g strokeWidth="2">
                      <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                      <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                      <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                      <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                    </g>
                  </g>
                </svg>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  {project.projectname}</h4>
                <p className="text-gray-600 text-center">{project.usecase}</p>
                <Button variant='default' className='   
                 rounded-2xl  text-white  ' asChild>
                <Link href={project.route} className=''>
                View App
                </Link>
               </Button>
                  
                   

              </div>)}
              </div>
            
              
  
  
            
  
          </div>
        </div>
      </section>
    )
  }

  export default ProjectsPage