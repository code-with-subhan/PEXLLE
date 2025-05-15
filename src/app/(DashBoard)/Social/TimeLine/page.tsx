import React from 'react'
import TimeLine_Trending from '@/components/Timeline/TimeLine_Trending'
import TimelineAllComments from '@/components/Timeline/TimelineAllComments'
import TimelineComments from '@/components/Timeline/TimelineComment_Textarea'
import TimelineFollowsers from '@/components/Timeline/TimelineFollowsers'
import Timeline_menus from '@/components/Timeline/Timeline_menus'

const page = () => {
  return (
    <div>
      <div>
        <Timeline_menus />
      </div>
      <div>
        <TimelineComments />
        <TimelineAllComments/>
      </div>
      <div>
        <TimelineFollowsers/>
        <TimeLine_Trending/>
      </div>
    </div>
  )
}

export default page
