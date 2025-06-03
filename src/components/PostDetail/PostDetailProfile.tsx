"use client"
import React from 'react'
import { Badge } from '../ui/badge'
import { Calendar, Mail, MapPin, Monitor, Phone } from 'lucide-react'
import { Button } from '../ui/button'
import { CardDescription, CardTitle } from '../ui/card'

interface ProfileType {
    title: string,
    icon: React.ReactNode
}

const Profile: ProfileType[] = [
    { title: "San Francisco, CA", icon: <MapPin /> },
    { title: "Posted on: August 22, 2023", icon: <Calendar /> },
    { title: "Condition: Used - Excellent", icon: <Monitor /> },
]
const PostDetailProfile = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1>$1,299.99</h1>
                <Badge className='bg-purple-50 text-purple-500 rounded-full'>Negotiable</Badge>
            </div>
            <div>
                {Profile.map(e => (
                    <div>
                        {e.icon}
                        <p>{e.title}</p>
                    </div>
                ))}
            </div>
            <div className='flex gap-3 justify-between items-center'>
                <Button><Phone /> Contact Seller</Button><Button> <Mail /> Email Seller</Button>
            </div>
            <div>
                <CardTitle>Seller Information</CardTitle>
                <div>
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80" className='size-7 rounded-full' alt="" />
                    <div>
                        <CardTitle>John Doe</CardTitle>
                        <div>
                            {[...Array(5)].map(_ => (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-4 h-4 text-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            ))}
                            <CardDescription> (4.2)</CardDescription>
                        </div>
                    </div>
                </div>
                <CardDescription>Member since 2019 • 50+ successful sales</CardDescription>
                <Button variant="outline">View Seller Profile</Button>
            </div>
        </div>
    )
}

export default PostDetailProfile
