"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
 {
    value: "Date (Newest first)",
    label: "Date (Newest first)",
    num : 0
  },
  {
    value: "price (Newest first)",
    label: "price (Newest first)",
    num : 1
  },
]

export function ComboboxFilter({format} : {format : (value : number) => void}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("Date (Newest first)")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="rounded-none  text-[#737373] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Date (Newest first)"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0  rounded-none">
        <Command>
          <CommandList className="rounded-none ">
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  className="rounded-none"
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    format(framework.num)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
