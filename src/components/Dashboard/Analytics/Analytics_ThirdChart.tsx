"use client"

import { RadialBar, RadialBarChart } from "recharts"

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
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function Analytics_thirdChart() {
  return (
    <div className="flex w-[320px] h-auto  bg-accent rounded-none p-3 shadow-none border-none">
        <div className="">
            <div>
                <span className="text-muted-foreground text-xs">Move</span>
                <h1 className="text-xl">562/600 <span className="text-xs text-muted-foreground">kcal</span>  </h1>
            </div>
            <div>
                <span className="text-muted-foreground text-xs">Exercise</span>
                <h1 className="text-xl">73/120 <span className="text-xs text-muted-foreground">min</span>  </h1>
            </div>
            <div>
                <span className="text-muted-foreground text-xs">Stand</span>
                <h1 className="text-xl">8/12 <span className="text-xs text-muted-foreground">hr</span>  </h1>
            </div>
        </div>
      <div className=" pb-0 flex-1/2 ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square"
        >
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="visitors"  />
          </RadialBarChart>
        </ChartContainer>
      </div>
    </div>
  )
}
