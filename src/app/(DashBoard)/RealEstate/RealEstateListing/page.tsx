import React from 'react'
import RealstateHomes from '@/components/RealStateListing/RealstateHomes'
import RealStateListingFilters from '@/components/RealStateListing/RealStateListingFilters'

const page = () => {
  return (
    <div className='flex my-5 gap-6'>
      <RealStateListingFilters />
      <RealstateHomes />
    </div>
  )
}

export default page
