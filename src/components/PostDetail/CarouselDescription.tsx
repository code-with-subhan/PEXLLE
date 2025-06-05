'use client'
import React from 'react'
import { DescriptionCarousel } from './Data'
import { CardDescription } from '../ui/card'


const CarouselDescription = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold'>Product Detail</h1>
            <div className='mt-5'>
                <h2 className='text-xl font-semibold'>Description</h2>
                <CardDescription className='mt-2'>{DescriptionCarousel.description}</CardDescription>
            </div>
            <div className='my-6'>
                <h1 className='text-xl font-medium mb-3'>Specification</h1>
                <div className='flex flex-wrap items-center justify-between gap-y-4'>
                {DescriptionCarousel.specification.map(e => (
                    <div key={e} className='flex gap-2 items-center w-1/2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-4 h-4 text-green-500"><path d="M20 6 9 17l-5-5"></path></svg>
                        <CardDescription className='text-sm'>{e}</CardDescription>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default CarouselDescription
