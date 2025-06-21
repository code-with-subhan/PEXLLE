import React from 'react'
import Filters from './Filters'
import FiltersCard from './FilterCard'
import { EcommerceFilterSheet } from './Filters/EcommerceFilterSheet'

const WholeFilters = () => {
  return (
    <div className='px-4 pt-12 lg:flex gap-4 justify-between'>     
      <EcommerceFilterSheet/>
      <Filters />
      <FiltersCard />
    </div>
  )
}

export default WholeFilters
