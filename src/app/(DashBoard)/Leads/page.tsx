import React from 'react'
import LeadsProfile from './components/LeadsProfile'
import LeadsCompanyInformation from './components/LeadsCompanyInformation'
import LeadsTabs from './components/LeadsTabs'

const page = () => {
  return (
    <div className='lg:flex gap-4 w-full justify-between'>
        <LeadsProfile />
        <LeadsTabs />
        <LeadsCompanyInformation />
    </div>
  )
}

export default page
