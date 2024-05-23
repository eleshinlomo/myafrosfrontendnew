

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



export const metadata: Metadata = {
  title: 'All routes',
  description: 'My Afros',
}


export default function AllRoutesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <div>
        {children}
    </div>
     
    
    
  )
}
