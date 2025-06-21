import React from 'react'
import { Badge } from '../ui/badge'
import { CardDescription, CardTitle } from '../ui/card'

interface Tasks {
    title : string,
    img : string,
    area : string,
    description : string
}

const BuildingTasks : Tasks[] = [
    {title : "Unit 213B" , img : "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop" , area : "$2,340/m - 1280 sqft" , description : "Available from 31 Aug 2023"},
    {title : "Unit 639" , img : "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop" , area : "$2,890/m - 1420 sqft" , description : "Available from 24 Aug 2023"},
    {title : "Unit 202" , img : "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&auto=format&fit=crop" , area : "$2,100/m - 1280 sqft" , description : "Available from 15 Sep 2023"},
    {title : "Unit 309C" , img : "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop" , area : "$3,440/m - 2360 sqft" , description : "Available from 12 Sep 2023"},
]

const BuildingUpcomingUnit = () => {
  return (
    <div className='mb-16 px-3'>
        <h1 className='font-bold mt-16 mb-12'>Upcoming Units</h1>
        <div className='my-6 grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1'>
            {BuildingTasks.map(e => (
                <div className='flex flex-col gap-1.5'>
                    <div className='relative'>
                        <img src={e.img} alt="" className='h-50 w-full'/>
                        <Badge className='absolute top-3 left-3 rounded-full'>Residential</Badge>
                    </div>
                        <CardTitle className='text-sm mt-1'>{e.title}</CardTitle>
                        <CardDescription>{e.area}</CardDescription>
                        <CardDescription>{e.description}</CardDescription>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BuildingUpcomingUnit
