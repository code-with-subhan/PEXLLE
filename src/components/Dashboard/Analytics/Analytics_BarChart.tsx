"use client"

import { Bar, BarChart, XAxis } from "recharts"
import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "Mon", desktop: 186 },
  { month: "Tue", desktop: 195 },
  { month: "Wed", desktop: 209 },
  { month: "Thu", desktop: 73 },
  { month: "Sat", desktop: 104 },
  { month: "Fri", desktop: 259 },
  { month: "Sun", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Analytics_BarChart() {
  return (
    <Card className="w-[375px] h-auto rounded-none bg-accent shadow-none border-none">
      <CardHeader>
        <CardDescription>Today</CardDescription>
        <h1 className="font-bold text-4xl">12,546 <span className="text-xs text-muted-foreground">steps</span></h1>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            {/* <CartesianGrid vertical={false} /> */}
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none">
        Over the past 7 days, you have walked <span className="font-bold">53,654</span> steps. 
        </div>
        <div className="leading-none text-muted-foreground">
        You need <span className="font-bold">12,584</span> more steps to reach your goal.
        </div>
      </CardFooter>
    </Card>
  )
}
