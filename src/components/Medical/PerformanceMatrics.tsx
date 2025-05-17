"use client"
import React from 'react'
import { CardTitle } from '../ui/card'
import { PerformanceMetrics } from './UpcomingDataAppointment'
import { ProgressBar } from './MedicalProgressBar'

const PerformanceMatrics = () => {
  return (
    <div className='w-full border border-[#F5F5F5] p-6 '>
      <CardTitle className='text-sm'>Performance Metrics</CardTitle>

      <div className='mt-5 flex flex-col gap-4'>
        {PerformanceMetrics.map((e ,i) => (
            <div key={e.id } className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                    <h1 className="text-sm">{e.title}</h1>
                    <span className={`${e.PercentageTextColor} text-sm font-semibold`}>{e.Percentage}%</span>
                </div>
                <div>
                    <ProgressBar range={e.Percentage}/>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default PerformanceMatrics
