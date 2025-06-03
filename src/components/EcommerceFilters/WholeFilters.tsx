import React from 'react'
import Filters from './Filters'
import FiltersCard from './FiltersCard'

const WholeFilters = () => {
  return (
    <div className='px-4 pt-12 flex gap-4 justify-between'>
      <Filters/>
      <FiltersCard/>
    </div>
  )
}

export default WholeFilters
