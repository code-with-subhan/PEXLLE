import React from 'react'
import { Button } from '@/components/ui/button'

const Policy: string[] = ["No Returns", "14 Days", "30 Days", "60 Days"]

const ReturnPolicyFilter = () => {
    return (
        <div>
            <h1 className='text-sm font-semibold mt-5'>Return Policy</h1>
            <div className='flex gap-2 flex-wrap mt-2'>
            {Policy.map(e => (
                <Button variant='outline' size='sm' className='rounded-none cursor-pointer'>{e}</Button>
            ))}
            </div>
        </div>
    )
}

export default ReturnPolicyFilter
