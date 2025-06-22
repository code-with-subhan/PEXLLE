// app/(DashBoard)/Settings/Users/page.tsx

import fs from "fs/promises" // ✅ best way to use async fs
import path from "path"
import { Metadata } from "next"
import { z } from "zod"
import React from "react"
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
     
      <div className=" h-full flex-1 flex-col space-y-8 sm:p-8 py-3 flex">
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
