import React from 'react'
import RealstateHomes from '@/components/RealStateListing/RealstateHomes'
import RealStateListingFilters from '@/components/RealStateListing/RealStateListingFilters'

const page = () => {
  return (
    <div className='flex'>
      <RealStateListingFilters />
      <RealstateHomes />
    </div>
  )
}

export default page
