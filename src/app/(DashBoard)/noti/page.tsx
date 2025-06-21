import React from 'react'
import { Button } from '@/components/ui/button'
import { Wifi , BatteryLow  , SendIcon , Timer} from 'lucide-react'

const page = () => {
  return (
    <div className='lg:p-70 md:p-30 pb-0 sm:p-20 h-120 '>
      <h1 className='text-center text-3xl font-bold lg:my-2 my-3 mt-20'>Dynamic Island Playground</h1>
      <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:mt-9 md:">
        <Button className='rounded-none bg-black ' size="sm">Default Notification</Button>
        <Button className='rounded-none bg-black ' size="sm">Incoming Call</Button>
        <Button className='rounded-none bg-black ' size="sm">Music Playing</Button>
        <Button className='rounded-none bg-black ' size="sm">
            <Wifi/> Wifi Connection
        </Button>
        <Button className='rounded-none bg-black ' size="sm">
            <BatteryLow /> Batery Status
        </Button>
        <Button className='rounded-none bg-black ' size="sm">
            <SendIcon /> GPS Navigation
        </Button>
        <Button className='rounded-none bg-black ' size="sm">
            <Timer /> Timer
        </Button>
      </div>
    </div>
  )
}

export default page
