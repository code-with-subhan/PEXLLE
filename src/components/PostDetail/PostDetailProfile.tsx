"use client"
import React from 'react'
import { Badge } from '../ui/badge'
import { Calendar, Mail, MapPin, Monitor, Phone } from 'lucide-react'
import { Button } from '../ui/button'
import { CardDescription, CardTitle } from '../ui/card'
import Image from 'next/image'

interface ProfileType {
    title: string,
    icon: React.ReactNode
}

const Profile: ProfileType[] = [
    { title: "San Francisco, CA", icon: <MapPin  className='text-[#aaa9a9] w-4'/> },
    { title: "Posted on: August 22, 2023", icon: <Calendar  className='text-[#aaa9a9] w-4'/> },
    { title: "Condition: Used - Excellent", icon: <Monitor  className='text-[#aaa9a9] w-4'/> },
]
const PostDetailProfile = () => {
    return (
        <div className='w-full bg-[#F5F5F5] p-8'>
            <div className='flex items-center justify-between'>
                <h1 className='text-4xl font-semibold'>$1,299.99</h1>
                <Badge className='bg-purple-100 text-purple-500 rounded-full text-sm'>Negotiable</Badge>
            </div>
            <div className='my-6 grid gap-y-3'>
                {Profile.map(e => (
                    <div className='flex gap-2 items-center'>
                        {e.icon}
                        <CardDescription className='text-sm'>{e.title}</CardDescription>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-2 gap-3 justify-between items-center w-full'>
                <Button className=' rounded-none'><Phone /> Contact Seller</Button>
                <Button className=' rounded-none'> <Mail /> Email Seller</Button>
            </div>
            <div className='my-8 flex flex-col gap-5'>
                <CardDescription className='font-semibold'>Seller Information</CardDescription>
                <div className='flex gap-4 items-center'>
                    <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80" className='size-14 rounded-full' alt="blur" blurDataURL="blur" width={1080} height={780} />
                    <div>
                        <CardDescription className='font-semibold'>John Doe</CardDescription>
                        <div className='flex items-center'>
                            {[...Array(5)].map(_ => (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-4 h-4 text-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            ))}
                            <CardDescription className='ml-2'> (4.2)</CardDescription>
                        </div>
                    </div>
                </div>
                <CardDescription>Member since 2019 • 50+ successful sales</CardDescription>
                <Button variant="outline" className='rounded-none cursor-pointer'>View Seller Profile</Button>
            </div>
        </div>
    )
}

export default PostDetailProfile
