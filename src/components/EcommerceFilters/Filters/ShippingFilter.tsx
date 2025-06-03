import { Button } from '@/components/ui/button'
import React from 'react'

const Shipping : string[] = ["Free" , "Paid" , "Pickup"]
const ShippingFilter = () => {
  return (
   <div>
    <h1 className='text-sm font-semibold mt-5'>Shipping</h1>
    <div className='flex gap-2 flex-wrap mt-2'>

            {Shipping.map(e => (
              <Button variant='outline' size='sm' className='rounded-none cursor-pointer'>{e}</Button>
            ))}
            </div>
    </div>
  )
}

export default ShippingFilter
