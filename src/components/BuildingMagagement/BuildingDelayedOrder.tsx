import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CardDescription, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
interface DelayedOrder {
    title: string,
    img?: string,
    description: string,
    time: string,
    badgeContent: string,
    Badge_Bg_Color: string,
    Badge_text_Color: string
}

const Order: DelayedOrder[] = [
    { title: "P-1925", img: "https://i.pravatar.cc/150?u=addie", description: "Unit 304 - Plumbing", time: "3 hrs late", badgeContent: "Urgent", Badge_Bg_Color: "bg-red-500", Badge_text_Color: "#fff" },
    { title: "H-482", description: "Unit 294 - HVAC", time: "1 day late", badgeContent: "High", Badge_Bg_Color: "bg-red-50", Badge_text_Color: "text-red-500" },
    { title: "G-3921", description: "Unit 1064 - General maintenance", time: "1 day late", badgeContent: "Normal", Badge_Bg_Color: "bg-black", Badge_text_Color: "#fff" },
]

const BuildingDelayedOrder = () => {
    return (
        <div className='lg:w-1/2'>
            <h1 className='mb-8 font-bold'>Delayed Work Orders</h1>
            <div className='flex flex-col gap-6'>
                {Order.map(e => (
                    <div className='flex gap-3'>
                        <div>
                            <Avatar>
                                <AvatarImage src={e.img} />
                                <AvatarFallback>WO</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className='w-full'>
                            <div className='flex justify-between items-center w-full'>
                                <CardTitle>{e.title}</CardTitle>
                                <CardDescription>{e.time}</CardDescription>
                            </div>
                            <div className='flex justify-between items-center w-full'>
                                <CardDescription className='w-2/3'>{e.description}</CardDescription>
                                <Badge className={`${e.Badge_text_Color} ${e.Badge_Bg_Color}`}>{e.badgeContent}</Badge>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default BuildingDelayedOrder
