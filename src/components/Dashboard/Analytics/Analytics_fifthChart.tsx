"use client"

import { Bar, BarChart, CartesianGrid } from "recharts"
import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,

} from "@/components/ui/chart"
const chartData = [
  { date: "2024-04-01", desktop: 182, mobile: 150 },
  { date: "2024-04-03", desktop: 247, mobile: 120 },
  { date: "2024-04-02", desktop: 167, mobile: 180 },
  { date: "2024-04-04", desktop: 380, mobile: 260 },
  { date: "2024-04-05", desktop: 350, mobile: 290 },
  { date: "2024-04-06", desktop: 320, mobile: 340 },
  { date: "2024-04-06", desktop: 290, mobile: 340 },

]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig


export function Anyalytics_fifthChart() {
  return (
    <Card className="w-[320px] bg-accent rounded-none grid gap-0 shadow-none border-none">
      <CardHeader>
        <CardTitle className="text-[.8rem]">Active Energy

        </CardTitle>
        <CardDescription className="text-[.8rem]">Youre burning an average of 754 calories per day. Good job!</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between ">
        <div className=" text-3xl font-semibold self-end">
            1,254<span className="text-xs text-muted-foreground">kcal/day</span>
        </div>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[45px] w-[100px] mb-1"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
