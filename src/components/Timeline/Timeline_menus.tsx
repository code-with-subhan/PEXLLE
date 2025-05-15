"use client"
import React from 'react'
import { Button } from '../ui/button'
import { House , Users ,Bell , Mail , Bookmark , User , Settings } from 'lucide-react'

const Timeline_menus = () => {
  return (
    <>
    <div>
      <ul className='p-4 grid grid-rows-7 '>
        <li><Button variant='outline'><House/> Home</Button></li>
        <li><Button variant='outline'><Users/>Communities</Button></li>
        <li><Button variant='outline'><Bell/>Notification</Button></li>
        <li><Button variant='outline'><Mail/>Messages</Button></li>
        <li><Button variant='outline'><Bookmark/>Bookmarks</Button></li>
        <li><Button variant='outline'><User/>Profile</Button></li>
        <li><Button variant='outline'><Settings/>Settings</Button></li>
      </ul>
      <Button className='w-full my-4'>Create Post</Button>
    </div>
    <div className='bg-[#F5F5F5] p-3'>
        <h5>Your Communities</h5>
        <ul className='grid grid-rows-3 gap-3 mt-3 px-4'>
            <li>🎨 Design Community</li>
            <li>💻 Tech Enthusiasts</li>
            <li>🌱 Sustainability</li>
        </ul>
    </div>
    </>
  )
}

export default Timeline_menus
