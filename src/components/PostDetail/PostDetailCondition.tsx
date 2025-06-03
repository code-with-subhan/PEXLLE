"use client"
import React from 'react'
import { ConditionCarousel } from './Data'


const PostDetailCondition = () => {
    return (
        <div>
            <h2>Condition</h2>
            <p>{ConditionCarousel.description}</p>
            <div>
                {ConditionCarousel.specification.map(e => (
                    <div key={e}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-4 h-4 text-green-500"><path d="M20 6 9 17l-5-5"></path></svg>
                        <p>{e}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostDetailCondition
