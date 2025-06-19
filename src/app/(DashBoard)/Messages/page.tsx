import MessageChatbox from '@/components/Messages/MessageChatbox'
import MessagesProfile from '@/components/Messages/MessagesProfile'
import MessagesUser from '@/components/Messages/MessagesUser'
import React from 'react'

const page = () => {
  return (
    <div className='flex gap-3'>
        <MessagesUser/>
        <MessageChatbox/>
        <MessagesProfile/>
    </div>
  )
}

export default page
