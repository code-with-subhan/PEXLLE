"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function ProgressBar({range} : {range : number}) {
  const [progress, setProgress] = React.useState(range)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-full" />
}
