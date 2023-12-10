
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Home',
  description: 'A Portfolio Page',
}


export default function HomeLayout({
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
