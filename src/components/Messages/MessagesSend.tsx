import { Send } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { MessagePaperPin } from './MessaagePAPERpin'

const MessagesSend = () => {
    return (
        <div className='flex gap-2 items-center justify-between mt-4'>
            <MessagePaperPin/>
            <Input className='bg-[#f5f5f5] rounded-none' placeholder='Type a message' />
            <Button className='rounded-none bg-black flex items-center px-3'><Send className='text-white  w-5 '/> Send</Button>
        </div>
    )
}

export default MessagesSend
