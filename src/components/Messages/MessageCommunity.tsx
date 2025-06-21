import React from 'react'
import { CardDescription } from '../ui/card'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const MessageCommunity = () => {
    const { Userobject } = useSelector((state: RootState) => state.Messages);
    console.log(Userobject)
    return (
        <div className='flex-col gap-6 mt-4 h-115 overflow-auto'>
            {Userobject && Userobject.Messages[0].Usermessages.map((e, i) => (
                <div key={e.id} className={`p-2 flex ${e.MessageType == "Send" ? "flex-row" : "flex-row-reverse"} gap-2`}>
                    <div className='self-end'>
                        <img src={Userobject.Messages[0].images} alt="" className='rounded-full size-9' />
                    </div>
                    <div className={`w-2/3 block ${e.title.length < 20 ? "w-auto" : "w-2/3"} `}>
                        <div className={`p-4 py-4 text-sm   ${e.MessageType == "Send" ? "bg-black text-white " : "bg-white text-black"} p-2`}>
                            {e.title}
                        </div>
                        <div className={`${e.MessageType == "Send" ? "text-left" : "text-right"} block `}>
                            <CardDescription >{e.MessageTime}</CardDescription>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MessageCommunity
