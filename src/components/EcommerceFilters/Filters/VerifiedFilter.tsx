import { Button } from '@/components/ui/button'
import React from 'react'

const Verified: string[] = ["All", "Yes", "No"]
const VerifiedFilter = () => {
  return (
    <div>
      <h1 className='text-sm font-semibold mt-5'>Verified Seller</h1>
      <div className='flex gap-2 flex-wrap mt-2'>
        {Verified.map(e => (
          <Button variant='outline' size='sm' className='shadow-nonerounded-none cursor-pointer'>{e}</Button>
        ))}
      </div>
    </div>
  )
}

export default VerifiedFilter
