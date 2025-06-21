import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Archive, Delete, Ellipsis, Moon, Star, Trash2, User } from "lucide-react"

export function MessageEllipse() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Ellipsis className='w-4.5' />
            </PopoverTrigger>
            <PopoverContent className=" rounded-none">
                <div className="grid gap-2 rounded-none ">
                    <div className=" flex gap-x-3 items-center hover:bg-[#f5f5f5] py-1 px-2 cursor-pointer">
                        <Moon className="w-4"/>
                        <h4 className="leading-none font-medium">Dark Mode</h4>
                    </div>
                    <div className=" flex gap-x-3 items-center hover:bg-[#f5f5f5] py-1 px-2 cursor-pointer">
                        <User className="w-4"/>
                        <h4 className="leading-none font-medium">View Profile</h4>
                    </div>
                    <div className=" flex gap-x-3 items-center hover:bg-[#f5f5f5] py-1 px-2 cursor-pointer">
                        <Star className="w-4"/>
                        <h4 className="leading-none font-medium">add to Favourite</h4>
                    </div>
                    <div className=" flex gap-x-3 items-center hover:bg-[#f5f5f5] py-1 px-2 cursor-pointer">
                        <Archive className="w-4"/>
                        <h4 className="leading-none font-medium">Archieve Chat</h4>
                    </div>
                    <div className=" flex gap-x-3 items-center hover:bg-[#f5f5f5] py-1 px-2 cursor-pointer">
                        <Trash2 className="w-4"/>
                        <h4 className="leading-none font-medium text-red-500">Delete Chat</h4>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
