import { Button } from '@/components/ui/button'
import React from 'react'


const ConditionType: string[] = ["New", "Like New", "Good", "Fair", "Poor"]
const ConditionFilter = () => {
    return (
        <div>
            <h1 className='text-sm font-semibold mt-5'>Condition</h1>
            <div className='flex gap-2 flex-wrap mt-2'>
                {ConditionType.map(e => (
                    <Button variant='outline' size='sm' className='rounded-none cursor-pointer'>{e}</Button>
                ))}
            </div>
        </div>
    )
}

export default ConditionFilter
