
// import { Metadata } from "next";
import { Button } from "@/components/ui/button";

import { Ellipsis } from "lucide-react";
import { Project_Members } from "@/app/(DashBoard)/Settings/Team/data/TeamData";

import { TeamMember } from "./components/InviteTeamMembers";

export default function Page() {
  const tasks = Project_Members;

  return (
    <>
      <h1 className="text-3xl font-normal mt-5 px-3 ">Team Members</h1>
      <div className="sm:flex grid  gap-4 justify-start sm:justify-end items-center px-3">
        <Button variant="outline" className="rounded-none " size="sm">
          Download CSV
        </Button>
        <TeamMember />
        <Button variant="ghost" className="rounded-none sm:block hidden" size="sm">
          <Ellipsis />
        </Button>
      </div>
      <div className=" h-full flex-1 flex-col space-y-8 px-3 pt-3  md:flex">
      </div>
    </>
  );
}
