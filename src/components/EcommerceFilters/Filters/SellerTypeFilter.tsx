import { Button } from '@/components/ui/button'
import React from 'react'


const Seller : string[] = ["Individual" , "Business"]
const SellerTypeFilter = () => {
  return (
    <div>
        <h1 className='text-sm font-semibold mt-5'>
            Seller Type
        </h1>
        <div className='flex gap-2 flex-wrap mt-2'>

            {Seller.map(e => (
                <Button variant='outline' size='sm' className='rounded-none cursor-pointer'>{e}</Button>
            ))}
            </div>
    </div>
  )
}

export default SellerTypeFilter
