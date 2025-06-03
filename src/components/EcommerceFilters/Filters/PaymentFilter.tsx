import React from 'react'
import { Button } from '@/components/ui/button'

const Payment : string[] = ["Cash" , "Card" , "Paypal" , "Crypto"]
const PaymentFilter = () => {
  return (
    <div>
      <h1 className='text-sm font-semibold mt-5'>Payment Option</h1>
      <div className='flex gap-2 flex-wrap mt-2'>

            {Payment.map(e => (
              <Button variant='outline' size='sm' className='rounded-none cursor-pointer'>{e}</Button>
            ))}
            </div>
    </div>
  )
}

export default PaymentFilter
