import React from 'react'
import { CardDescription } from '../ui/card'

const MessageCommunity = () => {
    return (
        <div className='flex-col gap-6 mt-4 h-115 overflow-auto'>
            {[...Array(7)].map((e: number, i) => (
                <div className={`p-2 flex ${i % 2 !== 0 ? "flex-row" : "flex-row-reverse"} gap-2`}>
                    <div className='self-end'>
                        <img src="https://i.pravatar.cc/48?img=1" alt="" className='rounded-full size-9' />
                    </div>
                    <div className='w-2/3 block'>
                        <div className={`p-4 py-4 text-sm  ${i % 2 == 0 ? "bg-black text-white " : "bg-white text-black"} p-2`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className={`${i % 2 !== 0 ? "text-left" : "text-right"} block `}>
                        <CardDescription >10:29 AM</CardDescription>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MessageCommunity
