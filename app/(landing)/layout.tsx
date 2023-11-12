
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home-Portfolio',
  description: 'A Portfolio Page',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <div>
      
      <main className='bg-gradient-to-r from-blue-500 via-transparent to-blue-500 ">
'>
        {children}
        </main>
    
    </div>
     
    
    
  )
}
