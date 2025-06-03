"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Heart, Upload } from 'lucide-react'

const PostHeader = () => {
  return (
    <div className='flex justify-between items-center'>
      <h1>iMac 27" (2020)</h1>
      <div className='flex items-center gap-3'>
        <Button size='icon' variant='outline' className='rounded-2xl'><Heart/></Button>
        <Button size='icon' variant='outline' className='rounded-2xl'><Upload/></Button>
      </div>
    </div>
  )
}

export default PostHeader
