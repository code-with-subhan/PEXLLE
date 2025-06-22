"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DollarSign, Users, Folder, HeartPulse } from "lucide-react";

const fourDashboardCards = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  items-center w-full gap-4 flex-wrap my-4">
      <Card className="flex-col gap-0 rounded-none bg-accent shadow-none border-none" >
        <CardHeader className="flex w-full justify-between items-center mb-1">
          <CardDescription className="text-[.8rem] text-accent-foreground font-semibold">Total Revenue</CardDescription>
          <span>
            <DollarSign className="w-4"/>
          </span>
        </CardHeader>
        <CardContent>
          <h1 className="text-3xl font-semibold">$45,231.89</h1>
        </CardContent>
        <CardFooter>
          <CardDescription>+20.1% from last month</CardDescription>
        </CardFooter>
      </Card>
      <Card className="flex-col gap-0 rounded-none bg-accent shadow-none border-none">
        <CardHeader className="flex w-full justify-between items-center mb-1">
          <CardDescription className="text-[.8rem] text-accent-foreground font-semibold">Subscriptions</CardDescription>
          <span>
            <Users className="w-4"/>
          </span>
        </CardHeader>
        <CardContent>
          <h1 className="text-3xl font-semibold text-[#FE6E76]">-350</h1>
        </CardContent>
        <CardFooter>
          <CardDescription>+180.1% from last month</CardDescription>
        </CardFooter>
      </Card>
      <Card className="flex-col gap-0 rounded-none bg-accent shadow-none border-none">
        <CardHeader className="flex w-full justify-between items-center mb-1">
          <CardDescription className="text-[.8rem] text-accent-foreground font-semibold">Sales</CardDescription>
          <span>
            <Folder className="w-4"/>
          </span>
        </CardHeader>
        <CardContent>
          <h1 className="text-3xl font-semibold text-[#11C678]">+12,234</h1>
        </CardContent>
        <CardFooter>
          <CardDescription>+19% from last month</CardDescription>
        </CardFooter>
      </Card>
      <Card className="flex-col gap-0 rounded-none bg-accent shadow-none border-none">
        <CardHeader className="flex w-full justify-between items-center mb-1">
          <CardDescription className="text-[.8rem] text-accent-foreground font-semibold">Active Now</CardDescription>
          <span>
            <HeartPulse className="w-4"/>
          </span>
        </CardHeader>
        <CardContent>
          <h1 className="text-3xl font-semibold">+573</h1>
        </CardContent>
        <CardFooter>
          <CardDescription>+21 since last hour</CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};

export default fourDashboardCards;
