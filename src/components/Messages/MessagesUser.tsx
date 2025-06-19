import React from 'react'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CardDescription, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Search } from 'lucide-react'
const MessagesUser = () => {
    return (
        <div className='md:w-145 mt-4 w-full md:block hidden'>
            <h1 className='text-4xl font-semibold'>Messages</h1>
            <div className='bg-[#f5f5f5] flex py-1 pl-3 items-center mt-8'>
                <Search className='w-4 text-[#737373]' />
                <Input placeholder='Search Messages' className='bg-[#f5f5f5] pl-2' />
            </div>

            {/* users */}
            <div className='grid grid-cols-1 mt-4'>
                {[...Array(5)].map(e => (
                    <div key={e} className='flex gap-2 p-3 items-center cursor-pointer  hover:bg-[#f5f5f5]'>
                        <div className='flex gap-2 items-center'>
                            <div className='relative'>
                                <div className='absolute size-3.5 z-30 bg-white bottom-0 right-0 rounded-full flex justify-center items-center '>
                                    <div className='bg-green-500  size-2.5  rounded-full'></div>
                                </div>
                                <Avatar className='relative size-11'>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                        <div className='grid gap-1'>
                            <CardTitle>Bob Smith</CardTitle>
                            <CardDescription>Hey ! how are you ?</CardDescription>
                        </div>
                        <div className='ml-auto'>
                            <CardDescription>10:30 AM</CardDescription>
                            <Badge variant='outline' className='bg-red-100 text-red-500 rounded-full block ml-auto'>50</Badge>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MessagesUser
