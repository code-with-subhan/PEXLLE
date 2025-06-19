"use client"
import React, { useState } from 'react'
import RealstateHomes from '@/components/RealStateListing/RealstateHomes'
import RealStateListingFilters from '@/components/RealStateListing/RealStateListingFilters'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WholeListing = () => {
    const [showListingFilter, setshowListingFilter] = React.useState(false)
    React.useEffect(() => {
        if (window.innerWidth >= 1024) {
            setshowListingFilter(true)
        }
    }, [showListingFilter])

    return (
        <div className='lg:flex my-5 gap-6'>
            <Button variant='ghost' className='flex lg:hidden m-4 rounded-none cursor-pointer' size='icon' onClick={() => setshowListingFilter(prev => !prev)}>
                <MenuIcon className='w-4 ' />
            </Button>
            <RealStateListingFilters bool={showListingFilter} />
            <RealstateHomes />
        </div>
    )
}

export default WholeListing
