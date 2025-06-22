import React from 'react'
import { CardDescription, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface RequestBuildingManagement {
    title: string,
    description: string,
    img: string,
    role: string
}

const Request: RequestBuildingManagement[] = [
    { title: "Cora Richards", description: "I've noticed that the water pressure in my bathroom has significantly decreased", img : "https://i.pravatar.cc/150?u=cora" , role: "Unit 543" },
    { title: "Alistair Dunlap", description: "The air conditioning unit in my apartment is not cooling properly", img : "https://i.pravatar.cc/150?u=alistair" , role: "Unit 312" },
    { title: "Bibi Shelton", description: "I would like to request a thorough cleaning of the common areas", img : "https://i.pravatar.cc/150?u=bibi" , role: "Unit 340B" },
]

const BuildingRequest = () => {
    return (
        <div className='lg:w-1/2 lg:mb-0 mb-16'>
            <h1 className='mb-8 font-bold'>New Requests</h1>
            <div className='flex flex-col lg:gap-4 gap-6'>
                {Request.map((e,i) => (
                    <div key={i} className='flex gap-4'>
                        <div>
                            <Avatar>
                                <AvatarImage src={e.img} />
                                <AvatarFallback>WO</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            <CardTitle>{e.title}</CardTitle>
                            <CardDescription>{e.role}</CardDescription>
                            <p className='text-sm mt-1'>{e.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BuildingRequest
