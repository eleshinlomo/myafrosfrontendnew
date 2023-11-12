
import Image from 'next/image'
import { Button } from './ui/button'
import { MobileMenu } from './mobilemenu'
import { getDateToday } from './date'

export const NewNavBar = ()=>{

    const date = getDateToday()

    return (
        <div>
            

            <div className='relative shadow-3xl flex justify-between pt-5 px-4 text-white'>
                
                {/* <div className='relative w-24 h-12 rounded-full bg-black m-2 '>
                    <Image src='/logo.png' alt='logo' fill />
                </div> */}

                <div className='mt-2 shadow-2xl bg-white rounded-full py-2 px-2'>
                 <p className='text-black'>
                   Date: {date}
                 </p>
                </div>

                <div className=''>
                 <MobileMenu />
                </div>
                
                <div className='hidden md:flex md:pt-3'>
                <Button className=' bg-blue-900 rounded-full '>Get Started</Button>
                </div>
            </div>


        </div>
    )
}