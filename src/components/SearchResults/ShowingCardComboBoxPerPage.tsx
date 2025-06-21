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

const NumberPerpage = [6, 8, 10, 12]

export function ComboPerPage({ serPerPage, perPage }: { serPerPage: (value: number) => void, perPage: number }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<string>(`${perPage} per page`)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[140px] justify-between rounded-none bg-[#F5F5F5]"
        >
          {value
            ? NumberPerpage.find((framework) => framework === +value.slice(0,2)) + " per page"
            : `${perPage} per page`}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {NumberPerpage.map((framework) => (
                <CommandItem
                  key={framework}
                  value={`${framework} per page`}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? ''  : currentValue)
                    serPerPage(framework)
                    setOpen(false)
                  }}
                >
                  {framework}
                  <Check
                    className={cn(
                      "ml-auto",
                      +value.slice(0,2) === framework ? "opacity-100" : "opacity-0"
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
