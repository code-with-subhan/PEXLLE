import React from 'react'
import CompanyJobCards from './components/CompanyJobCards'
import SpecificJobDetail from './components/SpecificJobDetail'
import EditProfile from './components/EditProfile'
const page = () => {
  return (
    <div className='flex justify-between p-4 gap-6'>
      <CompanyJobCards />
      <SpecificJobDetail />
      <EditProfile />
    </div>
  )
}

export default page
