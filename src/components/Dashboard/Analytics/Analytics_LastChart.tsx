"use client";
import React from "react";
import { Area, AreaChart,  } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { desktop: 383 },
  { desktop: 299 },
  { desktop: 367 },
  { desktop: 285 },
  { desktop: 236 },
  { desktop: 323 },
  { desktop: 253 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Analytics_LastChart() {
  return (
    <div className="w-[320px] h-auto rounded-none bg-accent pt-0 overflow-hidden shadow-none border-none">
      <div className="p-6">
        <h3 className="text-[.8rem] text-[#808080]">Time in Bed</h3>
        <p>
          <span className="text-4xl text-accent-foreground font-bold">8</span>hr&nbsp;
          <span className="text-4xl text-accent-foreground font-bold">35</span>min
        </p>
      </div>
        <ChartContainer config={chartConfig} className="p-0 h-[160px] w-[320px]">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
            }}
          >
            {/* <CartesianGrid vertical={false} /> */}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </div>
  );
}
