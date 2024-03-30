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
        usecase: "GenAI",
        api: 'OpenAI, Langchain, REST',
        frontend: "Next js/Typescript",
        backend: "Python/Django, FastAPI",
        image: '/images/ai_girl2.png',
        status: 'On-going',
        database: 'postGreSQL/Pinecone',
        cloud: 'Vercel',
        route: 'https://www.fixupe.com'
    },
    {   
        id:2,
        projectname: "Image Bot",
        icon: <BotIcon />,
        usecase: "GenAI",
        api: 'Fine-tuning',
        frontend: "Next js/Typescript",
        backend: "Python/Django, FastAPI",
        image: '/images/ai_girl2.png',
        status: 'On-going',
        database: 'postGreSQL/Pinecone',
        cloud: 'Vercel',
        route: 'https://imgbot.vercel.app'
    },
    {   
        id:3,
        projectname: "Petrolage",
        icon: <BotIcon />,
        usecase: "Staffing Project",
        api: 'REST',
        frontend: "Next js/Typescript",
        backend: "Node js",
        image: '/images/ai_team.png',
        status: 'On-going',
        database: 'mongoDB/Atlas',
        cloud: 'Vercel',
        route: 'https://www.petrolage.tech'
    },
    {
    id:4,
        projectname: "AppSec Engineers",
        icon: <BotIcon />,
        usecase: "CRM Project",
        api: 'OpenAI, Langchain, REST',
        frontend: "N/A",
        backend: "N/A",
        image: '/images/appsec.png',
        status: 'completed',
        database: 'postGreSQL/Pinecone',
        cloud: 'AWS',
        route: 'https://www.appsecengineer.com'
    },

    {   
        id:5,
        projectname: "Socialize",
        icon: <BotIcon />,
        usecase: "Social Media Project",
        api: 'OpenAI, Langchain, REST',
        frontend: "Next js/Typescript",
        backend: "Python/Django",
        image: '/images/man-and-woman-removebg-preview.png',
        database: 'postGreSQL/Pinecone',
        cloud: 'Vercel',
        status: 'On-going',
        route: 'https://dateme.vercel.app'
    },
    {   
        id:4,
        projectname: "Resume Maker",
        icon: <BotIcon />,
        usecase: "Resume Maker Project",
        api: 'OpenAI, Langchain, REST',
        frontend: "Next js/Typescript",
        backend: "Python/Django",
        image: '/images/man-and-woman-removebg-preview.png',
        database: 'postGreSQL/Pinecone',
        cloud: 'Vercel',
        status: 'Coming soon',
        route: ''
    },
   
]



