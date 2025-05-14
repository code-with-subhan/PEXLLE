// app/(DashBoard)/Settings/Users/page.tsx

import fs from "fs/promises" // ✅ best way to use async fs
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "@/app/(DashBoard)/Settings/Users/components/columns"
import { DataTable } from "@/app/(DashBoard)/Settings/Users/components/data-table"
import { taskSchema } from "./data/schema"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker built using TanStack Table.",
}

// ✅ Reads and parses tasks from tasks.json
async function getTasks() {
  try {
    const filePath = path.join(
      process.cwd(),
      "app",
      "(DashBoard)",
      "Settings",
      "Users",
      "data",
      "tasks.json"
    )

    const file = await fs.readFile(filePath, "utf-8")
    const tasks = JSON.parse(file)

    return z.array(taskSchema).parse(tasks) // ✅ validate using schema
  } catch (error) {
    console.error("❌ Error reading tasks.json:", error)
    return [] // fallback to empty list
  }
}

export default async function TaskPage() {
  const tasks = await getTasks()

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
