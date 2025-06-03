import { Button } from '@/components/ui/button'
import React from 'react'

const Nego: string[] = ["All", "Yes", "No"]
const Waranty = () => {
  return (
    <div>
      <h1 className='text-sm font-semibold mt-5'>Waranty</h1>
      <div className='flex gap-2 flex-wrap mt-2'>
        {Nego.map(e => (
          <Button variant='outline' size='sm' className='rounded-none cursor-pointer'>{e}</Button>
        ))}
      </div>
    </div>
  )
}

export default Waranty
