// app/(DashBoard)/Settings/Users/page.tsx

import fs from "fs/promises"; // ✅ best way to use async fs
import path from "path";
import { Metadata } from "next";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import { columns } from "@/app/(DashBoard)/Settings/Team/components/columns";
import { DataTable } from "@/app/(DashBoard)/Settings/Team/components/data-table";
import { taskSchema } from "./data/schema";
import { Ellipsis } from "lucide-react";
import {Project_Members} from "@/app/(DashBoard)/Settings/Team/data/TeamData";
export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker built using TanStack Table.",
};
import { TeamMember } from "./components/InviteTeamMembers";

// ✅ Reads and parses tasks from tasks.json

export default async function TaskPage() {
  const tasks = Project_Members ;

  return (
    <>
      <h1 className="text-3xl font-normal mt-5 px-3 ">Team Members</h1>
      <div className="flex gap-4 justify-end items-center px-3">
        <Button variant="outline" className="rounded-none " size="sm">
          Download CSV
        </Button>
        <TeamMember />
        <Button variant="ghost" className="rounded-none " size="sm">
          <Ellipsis />
        </Button>
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 px-3 pt-3  md:flex">
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
