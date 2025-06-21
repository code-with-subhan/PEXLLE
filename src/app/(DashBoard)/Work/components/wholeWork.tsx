'use client'
import React from 'react'
import CompanyJobCards from './CompanyJobCards'
import SpecificJobDetail from './SpecificJobDetail'
import EditProfile from './EditProfile'
import { JobData } from '../data/data'
import { JobDetail } from '../data/data'
import ResponsiveEachObj from './ResponsiveEachObj'

const WholeWork = () => {
    const [EachWorkObj, setEachWorkObj] = React.useState<JobData>(JobDetail[0])
    const [showWorkRes, setshowWorkRes] = React.useState<boolean>(true)
    return (
        <div className='lg:flex justify-between lg:p-4  gap-6'>
            <CompanyJobCards WorkObj={EachWorkObj} setWorkObj={setEachWorkObj} setshowWork={setshowWorkRes} showWork={showWorkRes} />
            <ResponsiveEachObj WorkObj={EachWorkObj} setshowWork={setshowWorkRes} showWork={showWorkRes} />
            <SpecificJobDetail WorkObj={EachWorkObj} />
            <EditProfile />
        </div>
    )
}

export default WholeWork
