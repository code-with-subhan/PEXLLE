import React from 'react'
import TimeLine_Trending from '@/components/Timeline/TimeLine_Trending'
import TimelineAllComments from '@/components/Timeline/TimelineAllComments'
import TimelineComments from '@/components/Timeline/TimelineComment_Textarea'
import TimelineFollowsers from '@/components/Timeline/TimelineFollowsers'
import Timeline_menus from '@/components/Timeline/Timeline_menus'

const page = () => {
  return (
    <div className='flex gap-2 lg:px-6 px-2 sm:px-15 '>
      <div className='bg-red w-1/4 sticky lg:block hidden'>
        <Timeline_menus />
      </div>
      <div className='lg:w-1/2'>
        <TimelineComments />
        <TimelineAllComments/>
      </div>
      <div className='w-1/3 my-6 lg:block hidden'>
        <TimelineFollowsers/>
        <TimeLine_Trending/>
      </div>
    </div>
  )
}

export default page
