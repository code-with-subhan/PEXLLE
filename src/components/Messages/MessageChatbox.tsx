import { AlertCircle, ChevronLeft } from 'lucide-react'
import React from 'react'
import { CardDescription, CardTitle } from '../ui/card'
import MessageCommunity from './MessageCommunity'
import MessagesSend from './MessagesSend'
import { MessageEllipse } from './MessageEliipse'

const MessageChatbox = () => {
    return (
        <div className='lg:w-2/3 w-full '>
            <div className='bg-[#f5f5f5] p-4 rounded-t-2xl'>
                <div className='flex justify-between items-center'>
                    <div className='md:hidden block'>
                        <ChevronLeft className='cursor-pointer' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='relative'>
                            <img src="https://i.pravatar.cc/48?img=5" alt="" className='rounded-full'/>
                            <div className='absolute size-3.5 z-49 bg-white bottom-0 right-0 rounded-full flex justify-center items-center '>
                                <div className='bg-green-500 size-2.5 rounded-full'></div>
                            </div>
                        </div>
                        <div className='grid gap-[2px]'>
                            <CardTitle className='text-xl'>Ethan Hunt</CardTitle>
                            <CardDescription>Offline</CardDescription>
                        </div>
                    </div>
                    <div className='flex gap-10 items-center'>
                        <MessageEllipse/>
                        <AlertCircle className='w-4.5'/>
                    </div>
                </div>
                <MessageCommunity />
            </div>
            <div className='sticky bottom-0 bg-white p-2 pb-4'>
            <MessagesSend />
            </div>
        </div>
    )
}

export default MessageChatbox
