"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Heart, Upload } from 'lucide-react'

const PostHeader = () => {
  return (
    <div className='flex justify-between items-center mt-7 '>
      <h1 className='text-4xl font-normal'>iMac 27" (2020)</h1>
      <div className='flex items-center gap-3'>
        <Button size='icon' variant='outline' className='rounded-2xl px-6'><Heart/></Button>
        <Button size='icon' variant='outline' className='rounded-2xl px-6'><Upload/></Button>
      </div>
    </div>
  )
}

export default PostHeader
