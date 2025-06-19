import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Globe, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Remove_TeamMembers = {
  Title: string;
  Description: string;
  img: string;
};

const TeamMember_Called: Remove_TeamMembers[] = [
  {
    Title: "John Smith",
    Description: "johnsmith@gmail.com",
    img: "https://i.pravatar.cc/150?u=js.member",
  },
  {
    Title: "JMario Rodriguez",
    Description: "mariorodriguez@gmail.com",
    img: "https://i.pravatar.cc/150?u=mr.member",
  },
  {
    Title: "Emily Chen",
    Description: "emilychen@gmail.com",
    img: "https://i.pravatar.cc/150?u=ec.member",
  },
];
export function TeamMember() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-none " size="sm">
          Invite team member
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[500px] rounded-none mb-3">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Team Members</DialogTitle>
        </DialogHeader>
        <div className="flex gap-3 items-center">
          <img
            src="https://i.pravatar.cc/150?u=owner "
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="text-[1rem ] font-medium">
              insank@gmail.com&ensp;
              <Badge variant="secondary">Owner</Badge>
            </h4>
            <p className="text-sm text-[#8d8d8d]">
              Startup Plan, Free, for trying things out.
            </p>
          </div>
        </div>
        <Tabs defaultValue="account" className="my-2">
          <TabsList className="w-full rounded-none">
            <TabsTrigger value="TeamsMembers">Team Members</TabsTrigger>
            <TabsTrigger value="DeveloperMode">Developer Mode</TabsTrigger>
          </TabsList>
          <TabsContent value="TeamsMembers" className="mt-3">
            <h3 className="font-semibold text-[1rem] mb-3">Invite Members</h3>
            <div className="flex gap-3">
              <Input
                value="✉ Subhan@gmail.com"
                className="rounded-none bg-[#F5F5F5]"
              />
              <Button className="rounded-none">Send Invite</Button>
            </div>
            <div className="mt-7 mb-0 grid grid-rows-3 gap-3">
              {TeamMember_Called.map((e) => (
                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <img
                      src={e.img}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h2 className="text-[.9rem] font-semibold">{e.Title}</h2>
                      <p className="text-sm text-[#8d8d8d]">{e.Description}</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="rounded-none text-red-500">
                    <X /> Remove
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="DeveloperMode"></TabsContent>
        </Tabs>

          <div className="w-full border-t pt-5 border-[#F5F5F5] ">
            <Button type="submit" className="rounded-none bg-[#323D48] w-full">
              <Globe /> Upgrade Plan
            </Button>
            <p className="text-sm text-[#8d8d8d] mt-5 text-center text hover:underline">
              Do you need any help? <span className="text-black font-bold">Contact Us</span>
            </p>
          </div>
      </DialogContent>
    </Dialog>
  );
}
