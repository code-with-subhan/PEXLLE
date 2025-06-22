import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
            framework.map((e , i) => (
              <SelectItem key={i} value={e.value}>{e.value}</SelectItem>
            ))
          }
          
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
