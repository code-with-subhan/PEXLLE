import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, ImagePlus, X } from "lucide-react";

export function ProfileFormDialogue() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-none">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] ">
        <DialogHeader className="translate-y-6">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="translate-y-5.5">
          <div className="relative flex justify-center items-center">
            <img
              src="https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470071459604-3b5ec3a7fe05%3Fw%3D1200%26h%3D400%26fit%3Dcrop&w=1920&q=75"
              alt=""
              className="h-[120px] w-full"
            />
            <div className="absolute flex gap-3 items-center">
              <Button className="opacity-80 cursor-pointer rounded-full" size='icon'>
                <ImagePlus className="text-white" />
              </Button>
              <Button className="opacity-80 cursor-pointer rounded-full" size='icon'>
                <X className="text-white" />
              </Button>
            </div>
          </div>
          <div className="rounded-full ml-4 w-23 bg-white  bg- p-1 -translate-y-7 relative flex justify-center items-center">
            <img
              src="https://i.pravatar.cc/150?img=3"
              className="rounded-full w-22 h-22"
              alt=""
            />
            <Button className="rounded-full opacity-80 cursor-pointer absolute p-1" size='icon'><ImagePlus /></Button>
          </div>
        </div>
        <div className="my-2 flex flex-col gap-4">
          <div className="flex gap-2 justify-between">
            <div className="w-full flex flex-col gap-2">
              <Label>First Name</Label>
              <Input
                value="Kohaku"
                className="w-full bg-[#F5F5F5] rounded-none focus:border-none border-none shadow-none"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <Label className="">Last Name</Label>
              <Input
                value="Tora"
                className="w-full bg-[#F5F5F5] rounded-none focus:border-none border-none shadow-none"
              />
            </div>
          </div>
          <div>
            <Label className="mb-2">UserName</Label>
            <div className="bg-[#F5F5F5] flex items-center justify-between pr-3">
              <Input
                value="Subhan Hassan"
                className="w-full bg-[#F5F5F5] rounded-none focus:border-none border-none shadow-none"
              />
              <Check className="text-green-500 w-4" />
            </div>
          </div>
          <div>
            <Label className="mb-2">Website</Label>
            <div className="bg-[#F5F5F5] flex items-center gap-2 px-3 text-[#737373] text-sm">
              https://{" "}
              <Input
                value="pexlledn.vercel.app"
                className="w-full bg-[#F5F5F5] rounded-none focus:border-none border-none shadow-none"
              />
            </div>
          </div>
          <div>
            <Label>Biography</Label>
            <Textarea
              value="Hey, I am Margaret, a web developer who loves turning ideas into amazing websites!"
              className="bg-[#F5F5F5] rounded-none"
            />
          </div>
          <p className="text-right text-[#737373] text-sm -translate-1.5">
            98 Characters remaining
          </p>
        </div>
        <DialogFooter className="grid grid-cols-2 -translate-y-4.5">
          <Button type="submit" className="rounded-none bg-black w-full">
            Save changes
          </Button>
          <Button
            type="submit"
            variant="outline"
            className="rounded-none w-full"
          >
            cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
