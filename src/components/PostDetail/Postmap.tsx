'use client'
import React from 'react'
import LogicticsMap from '../Logictics/LogisticsMap'

const Tips: string[] = ["Meet in a public place", "Don't pay in advance", "Check the item before buying", "Bring a friend if possible"]
const PostMap = () => {
    return (
        <div>
            <h2>Map</h2>
            {/* <LogicticsMap /> */}
            <p>Approximate location: San Francisco, CA 94105</p>
            <div>
                <h2>Safety Tips</h2>
                <div className='grid grid-rows-4 gap-2'>
                {Tips.map(e => (
                    <div key={e} className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        <p>{e}</p>
                    </div>
                ))}
                        </div>
            </div>
        </div>
    )
}

export default PostMap
