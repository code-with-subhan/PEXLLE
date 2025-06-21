"use client"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Calendar, FileText, LogOut, Mail, Settings, User } from "lucide-react"

export function MedicalResponsive() {
    return (
        <Sheet >
            <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className="rounded-none cursor-pointer md:hidden sm:block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block sm:hiddenh-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="px-6  pt-14 w-2/3 m-5 h-[95%] ">
                <ul className="grid grid-cols-1 gap-7 [&>*]:hover:bg-[#F5F5F5]">
                    <li className="flex gap-2 items-center p-2 px-3"><Calendar className="w-5"/> Shedule</li>
                    <li className="flex gap-2 items-center p-2 px-3"><User className="w-5"/> Patients</li>
                    <li className="flex gap-2 items-center p-2 px-3"><Mail className="w-5"/> Messages</li>
                    <li className="flex gap-2 items-center p-2 px-3"><FileText className="w-5"/> Reports</li>
                    <li className="flex gap-2 items-center p-2 px-3"><Settings className="w-5"/> Settings</li>
                    <li className="text-red-500 flex gap-2 items-center p-1 px-3"><LogOut className="w-5"/> Log out</li>
                </ul>
            </SheetContent>
        </Sheet>
    )
}
