import React from 'react'
import ProfileLike from './ProfileLike'
import TrendingTopics from './trendingTopics'

const CombineDivProfile = () => {
  return (
    <div  className='p-4 bg-[#F5F5F5] mt-3 h-auto flex flex-col pb-8 '>
      <TrendingTopics />
      <ProfileLike />
    </div>
  )
}

export default CombineDivProfile
