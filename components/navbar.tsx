
import Image from 'next/image'
import { Button } from './ui/button'
import { MobileMenu } from './mobilemenu'
import { getDateToday } from './date'

export const NewNavBar = ()=>{

    const date = getDateToday()

    return (
        <div>
            

            <div className='relative flex justify-between pt-5 px-4 text-black'>
                
                {/* <div className='relative w-24 h-12 rounded-full bg-black m-2 '>
                    <Image src='/logo.png' alt='logo' fill />
                </div> */}

                <div className='mt-2'>
                 <p>
                   Date: {date}
                 </p>
                </div>

                <div>
                 <MobileMenu />
                </div>
                
                <div className='hidden md:flex md:pt-3'>
                <Button className=' bg-black '>Get Started</Button>
                </div>
            </div>


        </div>
    )
}