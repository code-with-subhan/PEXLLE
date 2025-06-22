import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CompareComboBox } from "./CompareComboBox"
import CompareSelectCard from "./CompareSelectCard"
import React from "react"

export function Compare() {
  const [value1, setValue1] = React.useState<string>("")
  const [value2, setValue2] = React.useState<string>("")
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="rounded-none">Compare</Button>
      </SheetTrigger>
      <SheetContent className="mt-4 px-4 sm:w-145 pt-4 focus:border focus:border-black">
        <h1 className="font-semibold text-xl text-center">Compare Properties</h1>
        <div className="grid gap-2 grid-cols-2 mt-4">    
            <CompareComboBox value={value1} setValue={setValue1}/>
            <CompareComboBox value={value2} setValue={setValue2}/>
        </div>
        <div className="grid grid-cols-2 gap-2">
            {value1 && <CompareSelectCard value={value1} />}
            {value2 && <CompareSelectCard value={value2}/>}
        </div>
      </SheetContent>
    </Sheet>
  )
}
