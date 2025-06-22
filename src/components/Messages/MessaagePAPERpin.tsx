import { Button } from "@/components/ui/button"
import React from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar, FileText, Image, Paperclip } from "lucide-react"

export function MessagePaperPin() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='ghost' size='icon' className='rounded-none cursor-pointer'><Paperclip /></Button>
            </PopoverTrigger>
            <PopoverContent className="rounded-none p-1">
                <div className="grid gap-1">
                    <div className=" flex gap-x-3 items-center hover:bg-[#f5f5f5] py-1 px-2 cursor-pointer">
                        <Image className="w-4" />
                        <h4 className="leading-none font-medium">Send Images</h4>
                    </div>
                    <div className=" flex gap-x-3 items-center hover:bg-[#f5f5f5] py-1 px-2 cursor-pointer">
                        <FileText className="w-4" />
                        <h4 className="leading-none font-medium">Send Documents</h4>
                    </div>
                    <div className=" flex gap-x-3 items-center hover:bg-[#f5f5f5] py-1 px-2 cursor-pointer">
                        <Calendar className="w-4" />
                        <h4 className="leading-none font-medium">Shedule Meeting</h4>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
