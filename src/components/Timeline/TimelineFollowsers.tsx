"use client";
import React from "react";
import { Card, CardTitle, CardContent, CardDescription } from "../ui/card";
import { Button } from "../ui/button";

const TimelineFollowsers = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Card>
        <CardTitle>Who to follow</CardTitle>
        <CardContent className="flex gap-1 justify-between my-3">
          <div>
            <img
              src="https://i.pravatar.cc/100?img=7"
              alt=""
              className="rounded-full"
            />
          </div>
          <div>
            <div className="flex items-center ">
              <div>
                <CardTitle>George</CardTitle>
                <CardDescription className="mt-3">@georgeSZ</CardDescription>
              </div>
              <Button variant="outline">Follow</Button>
            </div>
            <CardDescription className="mt-2">
              I design digital products and ventures.
            </CardDescription>
          </div>
        </CardContent>
        <CardContent className="flex gap-1 justify-between my-3">
          <div>
            <img
              src="https://i.pravatar.cc/100?img=8"
              alt=""
              className="rounded-full"
            />
          </div>
          <div>
            <div>
              <div className="flex items-center ">
                <CardTitle>Nettie Schuster</CardTitle>
                <CardDescription className="mt-3">@Precious3</CardDescription>
              </div>
              <Button variant="outline">Follow</Button>
            </div>
            <CardDescription className="mt-2">
              The No Code SaaS Guy. Building a portfolio of software companies.
            </CardDescription>
          </div>
        </CardContent>
        <CardContent className="flex gap-1 justify-between my-3">
          <div>
            <img src="https://i.pravatar.cc/100?img=9" alt="" className="rounded-full" />
          </div>
          <div>
            <div>
              <div className="flex items-center ">
                <CardTitle>Mrs. Lola Rohan</CardTitle>
                <CardDescription className="mt-3">@collin_marks</CardDescription>
              </div>
              <Button variant="outline">Follow</Button>
            </div>
            <CardDescription className="mt-2">
              I design digital products and ventures.
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineFollowsers;
