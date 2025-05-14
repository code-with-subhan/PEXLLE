import React from 'react'
import { Button } from '@/components/ui/button'
import { Wifi , BatteryLow  , SendIcon , Timer} from 'lucide-react'

const page = () => {
  return (
    <div className='p-70 pb-0'>
      <h1 className='text-center text-3xl font-bold '>Dynamic Island Playground</h1>
      <div className="grid gap-4 grid-cols-3 mt-9">
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
