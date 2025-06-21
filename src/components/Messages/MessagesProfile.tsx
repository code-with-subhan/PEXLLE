'use client'
import React from 'react'
import { MessageProfile } from './messgesProfileData'
import { CardDescription, CardTitle } from '../ui/card'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const MessagesProfile = () => {
    const { Userobject } = useSelector((state: RootState) => state.Messages);
    return (
        <div className='w-1/2 px-2 md:block hidden'>
            <div className='border-b py-7 grid gap-2 place-items-center'>
                <div className='relative'>
                    <div className='absolute size-4 z-49 bg-white bottom-0 right-3 rounded-full flex justify-center items-center '>
                        <div className={`${Userobject?.onLine ? "bg-green-500" : "bg-gray-500"} size-3 rounded-full`}></div>
                    </div>
                    <img src={Userobject?.image} alt="" className='rounded-full size-26' />
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>Ethan Hunt</h1>
                    <CardDescription className='text-center'>{Userobject?.onLine ? "Active Now" : "Offline"}</CardDescription>
                </div>
            </div>

            <div className='mt-8 border-b pb-5'>
                <div>
                    <CardTitle>Bio</CardTitle>
                    <p className='text-[#737373] leading-5 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloremque, vitae neque facilis rem voluptatem!</p>
                </div>
                <div>
                    <CardTitle className='mt-4'>Email</CardTitle>
                    <p className='text-[#737373] leading-5 mt-4'>{Userobject?.Email}</p>
                </div>
                <div>
                    <CardTitle className='mt-4'>Phone</CardTitle>
                    <p className='text-[#737373] leading-5 mt-4'>{Userobject?.Phone}</p>
                </div>
                <div>
                    <CardTitle className='mt-4'>Location</CardTitle>
                    <p className='text-[#737373] leading-5 mt-4'>{Userobject?.location}</p>
                </div>
            </div>

        </div>
    )
}

export default MessagesProfile
