"use client"
import React from 'react'
import { ConditionCarousel } from './Data'
import { CardDescription } from '../ui/card'


const PostDetailCondition = () => {
    return (
        <div className='mb-16'>
            <div className='my-6'>

            <h2 className='text=[#737373] text-xl'>Condition</h2>
            <CardDescription className='mt-1'>{ConditionCarousel.description}</CardDescription>
            </div>
            <div className='flex items-center justify-between gap-y-2 flex-wrap'>
                {ConditionCarousel.specification.map(e => (
                    <div key={e} className='flex gap-2 items-center w-1/2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-green-500"><path d="M20 6 9 17l-5-5"></path></svg>
                        <CardDescription>{e}</CardDescription>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostDetailCondition
