import React from 'react'
import EducationImage from './components/EducationImage'
import ProfileDescriptionEducation from './components/profileDescription_Education'
import Accordian_Education from './components/Accordian_Education'
import EducationBenefits from './components/EducationBenefits'
import EducationInformation from './components/EducationInformation'

const page = () => {
  return (
    <div className='p-9 px-3 flex gap-3'>
      <div>
        <EducationImage />
        <ProfileDescriptionEducation />
        <Accordian_Education />
      </div>
      <div className='w-4/3 '>
        <EducationInformation />
      </div>
    </div>
  )
}

export default page
