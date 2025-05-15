"use client"
import React from 'react'
import { TimeLineAllComments } from './TimelineComments'
import { Button } from '../ui/button'
import { Bookmark, Ellipsis, Heart, MessagesSquare, Repeat, Upload } from 'lucide-react'
const TimelineAllComments = () => {
  return (
    <div>
      {TimeLineAllComments.map(e => (
        <div key={e.id} className='border-t border-[#F5F5F5] p-5'>
            <div><img src={e.profileImage} alt="" className='rounded-full' /></div>
            <div>
                <div className='inline-flex gap-1 items-center'>
                    <span className='font-medium text-sm'>{e.Title}</span>
                    <span className='text-[#737373] text-sm'>{e.subtitle}</span> · 
                    <span className='text-sm text-[#737373]'>{e.Time}</span>
                    <Button className='ml-auto'><Ellipsis /></Button>
                </div>
                <div className='text-sm my-3'>{e.description}</div>
                {e.img && <img src={e.img} className='my-2'/>}
                <div className='flex items-center justify-between my-2'>
                    <div className='[&>8]:text-[#737373] [&>8]:text-sm flex gap-1'>
                        <Button><Heart/>{e.favouriteCount}</Button><Repeat/>{e.share}<Button></Button><MessagesSquare/>{e.messages}<Button></Button>
                    </div>
                    <div className='[&>8]:text-[#737373] [&>8]:text-sm flex gap-1'>
                        <Bookmark/>
                        <Upload/>
                    </div>
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default TimelineAllComments
