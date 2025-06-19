import React from 'react'
import { MessageProfile } from './messgesProfileData'
import { CardDescription, CardTitle } from '../ui/card'



const MessagesProfile = () => {
    return (
        <div className='w-1/2 px-2 md:block hidden'>
            <div className='border-b py-7 grid gap-2 place-items-center'>
                <div className='relative'>
                    <div className='absolute size-4 z-49 bg-white bottom-0 right-3 rounded-full flex justify-center items-center '>
                        <div className='bg-green-500 size-3 rounded-full'></div>
                    </div>
                    <img src="https://i.pravatar.cc/48?img=5" alt="" className='rounded-full size-26' />
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>Ethan Hunt</h1>
                    <CardDescription className='text-center'>Offline</CardDescription>
                </div>
            </div>

            <div className='mt-8 border-b pb-5'>
                {MessageProfile.map(e => (
                    <div key={e.id} className='flex-col gap-4 mb-4'>
                        <CardTitle>{e.title}</CardTitle>
                        <p className='text-[#737373] leading-5 mt-4'>{e.des}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MessagesProfile
