"use client"
import React from 'react'
import PostHeader from './PostHeader'
import { CarouselBasic } from './Carousel'
import CarouselDescription from './CarouselDescription'
import PostComment from './PostComment'
import PostDetailCard from './PostDetailCard'
import PostDetailProfile from './PostDetailProfile'
import PostDetailCondition from './PostDetailCondition'
import PostMap from './Postmap'
import { Button } from '../ui/button'
import { Mail, Phone } from 'lucide-react'

const WholePost = () => {
    return (
        <>
            <div className='lg:px-4'>
                <PostHeader />
                <div className='mt-4 lg:flex gap-4 justify-between lg:pr-6'>
                    <div>
                        <CarouselBasic />
                        <div className='lg:px-12 py-6'>
                            <CarouselDescription />
                            <PostDetailCondition />
                            <PostComment />
                        </div>
                    </div>
                    <div className='w-full  mt-4  '>
                        <PostDetailProfile />
                        <PostMap />
                    </div>
                </div>
                <PostDetailCard />
            </div>
            <div className='sticky bottom-0 z-20 py-4 grid grid-cols-2 lg:hidden gap-3 bg-[rgba(255,255,255,0.4)] backdrop-blur-2xl'>
                <Button className='rounded-none cursor-pointer w-full'><Phone /> Call</Button>
                <Button className='rounded-none cursor-pointer w-full'><Mail /> Message</Button>
            </div>
        </>
    )
}

export default WholePost
