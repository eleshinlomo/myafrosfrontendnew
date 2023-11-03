
import Image from 'next/image'
import { Button } from './ui/button'
import { HomeMobileMenu } from './homemobilemenu'

export const NewNavBar = ()=>{
    return (
        <div>
            

            <div className='relative flex justify-between pt-5 px-4'>
                
                <div className='relative w-24 h-12 '>
                    <Image src='/logo.png' alt='logo' fill />
                </div>

                <div>
                 <HomeMobileMenu />
                </div>
                
                <div className='hidden md:flex md:pt-3'>
                <Button className='md:bg-blue-500 bg-black '>Get Started</Button>
                </div>
            </div>


        </div>
    )
}