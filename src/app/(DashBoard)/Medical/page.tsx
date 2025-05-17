import MedicalAppointment from '@/components/Medical/MedicalAppointment'
import MedicalProfile from '@/components/Medical/MedicalProfile'
import React from 'react'

const page = () => {
  return (
    <div className='flex gap-2 my-8 px-3 m'>
      <MedicalProfile/>
      <MedicalAppointment/>
    </div>
  )
}

export default page
