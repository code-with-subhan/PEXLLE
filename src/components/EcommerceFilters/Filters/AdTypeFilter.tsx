import React from 'react';
import { Button } from '@/components/ui/button';

const AdType: string[] = ["Standard", "Featured", "Urgent"];
const AdTypeFilter = () => {
    return (
        <div>
            <h1 className='text-sm font-semibold mt-5'>Ad Type</h1>
            <div className='flex gap-2 flex-wrap mt-2'>

            {AdType.map(e => (
                <Button variant='outline' size='sm' className='shadow-none rounded-none cursor-pointer'>{e}</Button>
            ))}
            </div>
        </div>
    )
}

export default AdTypeFilter;
