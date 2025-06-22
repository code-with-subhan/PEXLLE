"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
];

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
} satisfies ChartConfig;

export function Analytics_ExerciseHealthChart() {
  return (
    <Card className="w-[320px] bg-accent rounded-none shadow-none border-none">
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

            />
            <XAxis dataKey="visitors" type="number" hide />
            <Bar
              dataKey="visitors"
              layout="vertical"
              radius={5}
            >
              <LabelList
                dataKey="browser"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
            </Bar>
            {/* <Bar dataKey="visitors" layout="vertical" radius={5} /> */}
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex gap-5 border-t-muted-foreground pb-0 ">
        <div className="p-2 border-r-muted-foreground">
          <span className="text-muted-foreground text-xs">Move</span>
          <h1 className="text-2xl">
            562 <span className="text-muted-foreground text-xs">kcal</span>
          </h1>
        </div>
        <div className="p-2 border-r-muted-foreground">
          <span className="text-muted-foreground text-xs">Exercise</span>
          <h1 className="text-2xl">
            73 <span className="text-muted-foreground text-xs">min</span>
          </h1>
        </div>
        <div className="p-2">
          <span className="text-muted-foreground text-xs">Stand</span>
          <h1 className="text-2xl ">
            14 <span className="text-muted-foreground text-xs">hr</span>
          </h1>
        </div>
      </CardFooter>
    </Card>
  );
}
