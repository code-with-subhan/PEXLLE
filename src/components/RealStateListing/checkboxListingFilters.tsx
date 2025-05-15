"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemoFilters({text} : {text : string}) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" className="bg-white rounded-none"/>
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {text}
      </label>
    </div>
  )
}
