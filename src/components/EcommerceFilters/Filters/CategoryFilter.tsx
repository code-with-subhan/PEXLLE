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



export function CategoryFilter({title , states , setStates , array  } : {title : string , states : string , setStates : (value : string) => void , array : string[]}) {
    const [open, setOpen] = React.useState(false)
    console.log(states)
    const [value, setValue] = React.useState("All")

    return (
        <div className="w-full">
            <h1 className="mt-4 font-semibold text-sm mb-2">{title}</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild className="rounded-none w-full">
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className=" justify-between"
                    >
                        {value
                            ? array.find((framework) => framework === value)
                            : "All"}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className=" block  p-0 rounded-none">
                    <Command className="w-full">
                        <CommandList >
                            <CommandGroup >
                                {array.map((framework , i) => (
                                    <CommandItem
                                    className="rounded-none cursor-pointer"
                                        key={i}
                                        value={framework}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                            setStates(framework)
                                            
                                        }}
                                    >
                                        {framework}
                                        <Check
                                            className={cn(
                                                "ml-auto",
                                                value === framework ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>

    )
}
