
import { Footer } from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NewNavBar } from '@/components/navbar'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Afros',
  description: 'Official Home Page for Projects',
}

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      
      <body className={inter.className}>
        <NewNavBar />
        {children}
        <Footer />
      </body>
     
    </html>
    
  )
}
