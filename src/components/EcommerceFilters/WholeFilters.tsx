import React from 'react'
import Filters from './Filters'
import FiltersCard from './FiltersCard'
import { Button } from '../ui/button'
import { Filter } from 'lucide-react'
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
