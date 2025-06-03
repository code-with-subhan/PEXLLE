import { Button } from '@/components/ui/button'
import React from 'react'


const Nogo : string[] = ["All" , "Yes" , "No"]
const NegotiableFilter = () => {
  return (
    <div>
      <h1 className='text-sm font-semibold mt-5'>Negotiable</h1>
      <div className='flex gap-2 flex-wrap mt-2'>

            {Nogo.map(e => (
              <Button variant='outline' size='sm' className='rounded-none cursor-pointer'>{e}</Button>
            ))}
            </div>
    </div>
  )
}

export default NegotiableFilter
