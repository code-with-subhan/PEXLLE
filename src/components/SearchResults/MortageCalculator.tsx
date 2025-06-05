import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function MortageCalculator() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="rounded-none">Mortage Calculator</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] rounded-none">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Mortage Calculator</DialogTitle>
          </DialogHeader>
          <div className="grid gap-5 my-4 mb-5">
            <div className="flex gap-3 ">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" type="number" className="bg-[#F5F5F5] rounded-none focus:border focus:border-black" name="name"  />
            </div>
            <div className="flex gap-3 ">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" type="number" className="bg-[#F5F5F5] rounded-none focus:border focus:border-black" name="name"  />
            </div>
            <div className="flex gap-3 ">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" type="number" className="bg-[#F5F5F5] rounded-none focus:border focus:border-black" name="name"  />
            </div>
            <div className="flex gap-3 ">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" type="number" className="bg-[#F5F5F5] rounded-none focus:border focus:border-black" name="name"  />
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div className="text-xl font-bold">Monthly Payment:</div>
            <div className="text-xl font-bold">€1077.71</div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="w-full bg-black rounded-none">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
