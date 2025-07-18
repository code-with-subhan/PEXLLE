import React from 'react'
import EducationImage from './components/EducationImage'
import ProfileDescriptionEducation from './components/profileDescription_Education'
import Accordian_Education from './components/Accordian_Education'
import EducationBenefits from './components/EducationBenefits'
import EducationInformation from './components/EducationInformation'

const page = () => {
  return (
    <div className='p-9 px-3 lg:flex gap-3 block'>
      <div>
        <EducationImage />
        <ProfileDescriptionEducation />
        <Accordian_Education />
      </div>
      <div className=' '>
        <EducationInformation />
      </div>
    </div>
  )
}

export default page
