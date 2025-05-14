import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronsUpDown } from "lucide-react"

export function ComboboxDemo({framework} : {framework : {label : string , value : string}[]}) {
  return (
    <Select >
      <div className="w-full">

      <SelectTrigger className=" bg-[#F5F5F5] rounded-none">
        <SelectValue placeholder="Select role..." className="w-[450px]"/>
      </SelectTrigger>
      </div>
      <SelectContent className="rounded-none">
        <SelectGroup className="rounded-none">
          {
            framework.map(e => (
              <SelectItem value={e.value}>{e.value}</SelectItem>
            ))
          }
          
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
