// components/useState
import React from 'react'
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
  
export interface ProjectProps {
    id: number;
    projectname: string;
    icon: React.ReactNode;
    usecase: string;
    api: string;
    frontend: string;
    backend: string;
    image: string;
    status: string;
    database: string;
    cloud: string;
    route: string;

}

export const Projects: ProjectProps[] = [
    {   
        id:1,
        projectname: "CRM",
        icon: <BotIcon />,
        usecase: "CRM + GenAI",
        api: 'OpenAI, REST',
        frontend: "Next js/Typescript",
        backend: "Python/Django, FastAPI",
        image: '/images/ai_girl2.png',
        status: 'On-going',
        database: 'postGreSQL/Pinecone',
        cloud: 'Vercel',
        route: 'https://crm.myafros.com/'
    },
    {   
        id:2,
        projectname: "Image Bot",
        icon: <BotIcon />,
        usecase: "ConversationalAI + GenAI",
        api: 'Fine-tuning',
        frontend: "Next js/Typescript",
        backend: "Python/Django, FastAPI",
        image: '/images/ai_girl2.png',
        status: 'On-going',
        database: 'postGreSQL/Pinecone',
        cloud: 'Vercel',
        route: 'https://imgbot.myafros.com/'
    },
   
    {   
        id:3,
        projectname: "Text Reader",
        icon: <BotIcon />,
        usecase: "text to voice",
        api: 'REST',
        frontend: "Next js/Typescript",
        backend: "FastAPI",
        image: '/images/ai_team.png',
        status: 'On-going',
        database: 'postGRES',
        cloud: 'Vercel',
        route: 'https://crm.myafros.com/dashboard/genai/textreaderpage'
    },
    {
    id:4,
        projectname: "Transcriber",
        icon: <BotIcon />,
        usecase: "Audio to Text",
        api: 'OpenAI, Langchain, REST',
        frontend: "Next/Typescript",
        backend: "FastAPI",
        image: '/images/appsec.png',
        status: 'completed',
        database: 'postGreSQL/Google TTS',
        cloud: 'Vercel',
        route: 'https://crm.myafros.com/dashboard/genai/aitranscriber'
    },

    
    {   
        id:4,
        projectname: "Token Counter",
        icon: <BotIcon />,
        usecase: "GenAI",
        api: 'REST',
        frontend: "Next js/Typescript",
        backend: "Python/Django",
        image: '/images/man-and-woman-removebg-preview.png',
        database: 'postGreSQL/Pinecone',
        cloud: 'Vercel',
        status: 'Completed',
        route: 'https://ai.myafros.com'
    },
    {   
        id:5,
        projectname: "Content Writer",
        icon: <BotIcon />,
        usecase: "GenAI",
        api: 'OpenAI, REST',
        frontend: "Next js/Typescript",
        backend: "Node js",
        image: '/images/man-and-woman-removebg-preview.png',
        database: 'postGreSQL',
        cloud: 'Vercel',
        status: 'On-going',
        route: 'https://crm.myafros.com/dashboard/genai/contentwriter'
    },
   
]



