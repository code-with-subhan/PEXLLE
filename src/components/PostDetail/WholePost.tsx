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

const WholePost = () => {
    return (
        <div className='px-4'>
            <PostHeader />
            <div className='mt-4 flex gap-4 justify-between pr-6'>
                <div>
                    <CarouselBasic />
                    <div className='px-12 py-6'>
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
            <PostDetailCard/>
        </div>
    )
}

export default WholePost
