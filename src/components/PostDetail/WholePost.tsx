"use client"
import React from 'react'
import PostHeader from './PostHeader'
import { CarouselBasic } from './Carousel'
import CarouselDescription from './CarouselDescription'
import PostComment from './PostComment'
import PostDetailCard from './PostDetailCard'
// import PostMap from './PostMap'
import PostDetailProfile from './PostDetailProfile'
import PostDetailCondition from './PostDetailCondition'

const WholePost = () => {
    return (
        <div>
            <PostHeader />
            <div>
                <div>

                    <CarouselBasic />
                    <CarouselDescription />
                    <PostDetailCondition />
                    <PostComment />
                </div>
                <div>
                    <PostDetailProfile />
                    {/* <PostMap /> */}
                </div>
            </div>
            <PostDetailCard/>
        </div>
    )
}

export default WholePost
