"use client"
import React from 'react'
import { Button } from '../ui/button'
import { House , Users ,Bell , Mail , Bookmark , User , Settings } from 'lucide-react'

const Timeline_menus = () => {
  return (
    <>
    <div className='w-full'>
      <ul className='p-4 px-2 flex flex-col w-full gap-2 '>
        <li className='w-full block'><Button variant='ghost' className="rounded-none cursor-pointer"><House/> Home</Button></li>
        <li className='w-full block'><Button variant='ghost' className="rounded-none cursor-pointer"><Users/>Communities</Button></li>
        <li className='w-full block'><Button variant='ghost' className="rounded-none cursor-pointer"><Bell/>Notification</Button></li>
        <li className='w-full block'><Button variant='ghost' className="rounded-none cursor-pointer"><Mail/>Messages</Button></li>
        <li className='w-full block'><Button variant='ghost' className="rounded-none cursor-pointer"><Bookmark/>Bookmarks</Button></li>
        <li className='w-full block'><Button variant='ghost' className="rounded-none cursor-pointer"><User/>Profile</Button></li>
        <li className='w-full block'><Button variant='ghost' className="rounded-none cursor-pointer"><Settings/>Settings</Button></li>
      </ul>
      <Button className='w-full my-4 rounded-none cursor-pointer' >Create Post</Button>
    </div>
    <div className='bg-[#F5F5F5] p-4'>
        <h5 className='font-bold text-sm '>Your Communities</h5>
        <ul className='grid grid-rows-3 gap-5 mt-3 px-4  '>
            <li className='text-sm font-medium'>🎨 Design Community</li>
            <li className='text-sm font-medium'>💻 Tech Enthusiasts</li>
            <li className='text-sm font-medium'>🌱 Sustainability</li>
        </ul>
    </div>
    </>
  )
}

export default Timeline_menus
