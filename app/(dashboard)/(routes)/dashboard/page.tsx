"use client"
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { ArrowRight, Code, CodeIcon, ImageIcon, MessageSquare, MusicIcon, VideoIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {useRouter} from 'next/navigation'



const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-pink-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/image"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-blue-500",
    bgColor: "bg-pink-500/10",
    href: "/video"
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    color: "text-purple-500",
    bgColor: "bg-violet-500/10",
    href: "/music"
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    href: "/code",
    color: "text-grey-500"
    },
]
const DashboardPage = ()=>{
  const router = useRouter()
  return (
    <div>
       <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
          Do everything with AI
        </h2>

        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          Complete your task with AI - Ultra fast AI Solution
        </p>
       </div>

       <div className='px-4 md:px-32 space-y-4'>
       {
        tools.map((tool, index)=>
          <Card 
          onClick={()=>router.push(tool.href)}
          key={index}
          className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'
          >

            <div className='flex items-center gap-x-4'>

             <div className={cn(`w-p-2 w-fit rounded-md`, tool.bgColor)}>
              <tool.icon className={cn('w-8 h-8', tool.color)} />
             </div>

             <div className='font-semibold'>
              {tool.label}
             </div>

            </div>
            <ArrowRight className='w-5 h-5' />
          </Card>
        )
       }
       </div>
    </div>
  )
}

export default DashboardPage
