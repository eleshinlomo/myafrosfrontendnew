
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy Page for Myafros',
}


export default function PrivacyLayout({
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
