"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "chrome", visitors: 275, fill: "#E76E50" },
  { browser: "safari", visitors: 200, fill: "#2A9D90" },
  { browser: "firefox", visitors: 187, fill: "#274754" },
  { browser: "edge", visitors: 173, fill: "#E8C468" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  New: {
    label: "New",
    color: "hsl(var(--chart-1))",
  },
  Open: {
    label: "Open",
    color: "hsl(var(--chart-2))",
  },
  InProgess: {
    label: "InProgess",
    color: "hsl(var(--chart-3))",
  },
  Delayed: {
    label: "Delayed",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function BuildingChart() {
  return (
    <Card className="rounded-none shadow-none">
      <CardHeader>
        <CardTitle>Bar Chart - Mixed</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
