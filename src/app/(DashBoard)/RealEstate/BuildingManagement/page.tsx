import WholeBuilding from '@/components/BuildingMagagement/WholeBuilding'
import React from 'react'

const page = () => {
  return (
    <div>
      <header className='my-5 px-5'>
        <nav>
          <ul className='flex gap-7 items-center [&>*]:text-sm'>
            <li className='cursor-pointer text-gray-200 '>Overview</li>
            <li className='cursor-pointer text-[#737373] '>Work Orders</li>
            <li className='cursor-pointer text-[#737373] '>Rent</li>
            <li className='cursor-pointer text-[#737373] '>Collection</li>
            <li className='cursor-pointer text-[#737373] '>Access</li>
          </ul>
        </nav>
      </header>
      <WholeBuilding />
    </div>
  )
}

export default page
