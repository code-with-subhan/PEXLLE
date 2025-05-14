import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import { ComboboxDemo } from "./comboBox";
import { Switch } from "@/components/ui/switch";
const frameworks = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "User",
    label: "User",
  },
  {
    value: "Editor",
    label: "Editor",
  },
];
const frameworks2 = [
  {
    value: "IT",
    label: "IT",
  },
  {
    value: "HR",
    label: "HR",
  },
  {
    value: "Sales",
    label: "Sales",
  },
  {
    value: "Marketing",
    label: "Marketing",
  },
];

export function DataTableViewOptions() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-none" size="sm">
          <Plus /> Add User
        </Button>
      </SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle>Add New User</SheetTitle>
          <SheetDescription>
            Add a new user to the system. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="px-4">
          <div className="grid gap-4 py-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3 rounded-none bg-[#F5F5F5] "
            />
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="username"
              className="col-span-3 rounded-none bg-[#F5F5F5] "
            />
            <div className="flex flex-col gap-3 w-full">
              <Label htmlFor="username" className=" mb-1">
                Role
              </Label>
              <ComboboxDemo framework={frameworks}/>
              <Label htmlFor="username" className="mb-1">
                Department
              </Label>
              <ComboboxDemo framework={frameworks2}/>
            </div>
          </div>
          <div className="flex items-center space-x-2 font-medium text-sm">
            <Switch id="airplane-mode" className="bg-green-500" /> &ensp; Active
          </div>
          <div className="flex items-center justify-end gap-3 mt-5">
            <SheetClose asChild>
              <Button type="submit" size="sm" className="rounded-none">
                Add user
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                type="submit"
                variant="outline"
                size="sm"
                className="rounded-none"
              >
                cancel
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
