import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CompareComboBox } from "./CompareComboBox"
import CompareSelectCard from "./CompareSelectCard"

export function Compare() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="rounded-none">Compare</Button>
      </SheetTrigger>
      <SheetContent className="mt-4 px-4 w-145 pt-4 focus:border focus:border-black">
        <h1 className="font-semibold text-xl text-center">Compare Properties</h1>
        <div className="grid gap-2 grid-cols-2 mt-4">    
            <CompareComboBox/>
            <CompareComboBox/>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <CompareSelectCard/>
            <CompareSelectCard/>
        </div>
      </SheetContent>
    </Sheet>
  )
}
