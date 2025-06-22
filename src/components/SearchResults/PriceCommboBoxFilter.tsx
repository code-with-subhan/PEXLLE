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
    value: "Default",
    label: "Default",
    num : 0
  },
  {
    value: "Price Low to High",
    label: "Price Low to High",
    num : 1
  },
  {
    value: "Price High to Low",
    label: "Price High to Low",
    num : 2
  },
]

export function PriceFilter({searchformal} : {searchformal : (value : number) => void}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-200px mt-2 sm:mt-0">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="rounded-none justify-between font-normal max-w-[200px] w-180px "
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Default"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[160px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue : any) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    searchformal(framework.num)
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
