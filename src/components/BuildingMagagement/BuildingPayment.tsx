import React from 'react'
import { Badge } from '../ui/badge'
import { CardDescription } from '../ui/card'

interface BuildingPaymentType {
    title : string,
    price : string
}

const Payment : BuildingPaymentType[] = [
    {title : "Rent" , price : "$223,600"},
    {title : "Additional services" , price : "$73,600"},
    {title : "Maintenance" , price : "$54,600"},
    {title : "Debt" , price : "$29,600"}
]
const BuildingPayment = () => {
  return (
    <div className='bg-[#F5F5F5] p-6 lg:mt-0 mt-5'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-xl'>Payment</h1>
        <Badge className='rounded-full'>This month</Badge>
      </div>
      <div className='lg:flex justify-between items-center flex-wrap mt-13 grid grid-cols-2 gap-6'>
        {Payment.map(e => (
            <div className=''>
                <h2 className='lg:text-xl sm:text-2xl text-xl font-bold'>{e.price}</h2>
                <CardDescription>{e.title}</CardDescription>
            </div>
        ))}
      </div>
    </div>
  )
}

export default BuildingPayment
