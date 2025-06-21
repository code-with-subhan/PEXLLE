import UserProfileInformation from '@/components/UserProfile/UserProfileInformation'
import UserProfileProducts from '@/components/UserProfile/UserProfileProducts'
import React from 'react'

const page = () => {
  return (
    <div className='lg:flex gap-9 mt-7'>
      <UserProfileInformation/>
      <UserProfileProducts/>
    </div>
  )
}

export default page
