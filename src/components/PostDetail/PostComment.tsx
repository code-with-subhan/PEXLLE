"use client"
import React from 'react'
import { CardDescription, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Send } from 'lucide-react'
interface CommentsPost {
    title: string,
    description: string,
    data: string,
    img: string
}

const Comments: CommentsPost[] = [
    { title: "Alice Johnson", description: "This iMac looks amazing! How's the performance for video editing?", data: "2023-09-10", img: "https://i.pravatar.cc/150?img=1" },
    { title: "Bob Smith", description: "I've been using the same model for a year now. It's been great for my graphic design work!", data: "2023-09-11", img: "https://i.pravatar.cc/150?img=2" },
]
const PostComment = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-4 text-[#737373]'>Comments</h1>
            <div className='grid gap-6'>
                {Comments.map(e => (
                    <div className='flex gap-3  '>
                        <div>
                            <Avatar>
                                <AvatarImage src={e.img} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div  className='w-full'>
                            <div className='bg-[#F5F5F5] p-4 w-full'>
                                <div className='flex justify-between items-center'>
                                    <CardTitle>{e.title}</CardTitle>
                                    <CardDescription>{e.data}</CardDescription>
                                </div>
                                <CardDescription className='mt-2'>{e.description}</CardDescription>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <Button variant='ghost' className='text-[#737373] rounded-none'>Like</Button>
                                <Button variant='ghost' className='text-[#737373] rounded-none'>Reply</Button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='flex gap-2'>
                    <Textarea placeholder='Add a comment...' className='rounded-none bg-[#f5f5f5] ouline-none border-none h-16 p-4'/> 
                    <Button className='rounded-none px-10' ><Send/> Post</Button>
                </div>
            </div>
        </div>
    )
}

export default PostComment
