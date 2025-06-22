import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPlus } from "lucide-react"
import { MedicalComboboxDemo } from "./medicalComboBox"
import { MedicalDatePickerDemo } from "./MedicalDataPicker"
import React from "react"
export function MedicalDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
       <Button size='sm' className="rounded-none">
          <UserPlus className=""/> Add Patient
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-none">
        <DialogHeader>
          <DialogTitle>Add New Patient</DialogTitle>
          <DialogDescription>
            Enter the details of the new patient here. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="" className="col-span-3 rounded-none bg-[#F5F5F5] focus:border-none focus:outline-none" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="" className="col-span-3 rounded-none bg-[#F5F5F5] focus:border-none focus:outline-none" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Phone" className="text-right">
              Phone
            </Label>
            <Input id="Phone" value="" className="col-span-3 rounded-none bg-[#F5F5F5] focus:border-none focus:outline-none" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Adress" className="text-right">
              Adress
            </Label>
            <Input id="Adress" value="" className="col-span-3 rounded-none bg-[#F5F5F5] focus:border-none focus:outline-none" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="" className="text-right">
              Adress
            </Label>
            <MedicalComboboxDemo/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="" className="text-right">
              Adress
            </Label>
            <MedicalDatePickerDemo/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="rounded-none">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
