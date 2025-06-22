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
import { Properties } from "./data/properties"
interface props {
  value : string,
  setValue : (value : string) => void
}

export function CompareComboBox({value , setValue} : props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="max:w-[150px] sm:w-[250px] justify-between rounded-none bg-[#F5F5F5] focus:border focus:border-black"
        >
          {value
            ? Properties.find((framework) => framework.id === value)?.title
            : "Select a property"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[150px] sm:w-[250px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {Properties.map((framework) => (
                <CommandItem
                  key={framework.id}
                  value={framework.id}
                  onSelect={(currentValue) => {
                    console.log(value)
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.title}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.id ? "opacity-100" : "opacity-0"
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
