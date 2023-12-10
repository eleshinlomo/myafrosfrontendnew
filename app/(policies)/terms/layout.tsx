
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Terms',
  description: 'Terms Page for Myafros',
}


export default function TermsLayout({
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
