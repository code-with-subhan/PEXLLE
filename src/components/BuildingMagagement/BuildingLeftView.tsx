"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { CardDescription, CardTitle } from "../ui/card";
import { Progress } from "@/components/ui/progress";
import { BuildingChart } from "./BuildingChart";

const BuildingLeftView = () => {
  return (
    <div className="p-2">
      <div>
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop"
          alt=""
        />
        <Badge>Residential</Badge>
      </div>
      <h1 className="mt-2 mb-3 font-bold text-xl">Sobha Garden</h1>
      <div className="my-4">
        <div>
          <CardTitle>1810</CardTitle>
          <CardDescription>Residents</CardDescription>
        </div>
        <div>
          <CardTitle>1234</CardTitle>
          <CardDescription>Units</CardDescription>
        </div>
        <div>
          <CardTitle>578</CardTitle>
          <CardDescription>Vacant</CardDescription>
        </div>
        <div>
          <CardTitle>134</CardTitle>
          <CardDescription>Upcoming</CardDescription>
        </div>
      </div>
      <div className="my-3">
        <h3 className="font-semibold text-sm">Leased by 87%</h3>
        <Progress value={87} />
      </div>
      <div className="my-3">
        <h3>Work Orders</h3>
        <BuildingChart />
      </div>
      <h2 className="my-2">On-site Staff</h2>
      <div className="my-2">
        <div className="flex justify-between items-center ">
          <CardTitle>Security</CardTitle>
          <CardDescription>Louie Hodges</CardDescription>
        </div>
        <CardDescription>+971 5 927 6701</CardDescription>
      </div>
      <div className="my-2">
        <div className="flex justify-between items-center ">
          <CardTitle>Maintenance</CardTitle>
          <CardDescription>Haris Bowman</CardDescription>
        </div>
        <CardDescription>+971 5 927 6701</CardDescription>
      </div>
      <div className="mt-2">
        <AvatarGroup total={24}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </div>
      <CardDescription>34 staff members</CardDescription>
    </div>
  );
};

export default BuildingLeftView;
