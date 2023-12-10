
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'About',
  description: 'About Page for Myafros',
}


export default function AboutLayout({
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
