"use client";
import React from "react";
import { Card, CardTitle, CardContent, CardDescription } from "../ui/card";
import { Button } from "../ui/button";

const TimelineFollowsers = () => {
  return (
    <div className="bg-[#F5F5F5] w-full">
      <h3 className="px-5 pt-3 font-bold text-sm">Who to follow</h3>
      <div className="shadow-none bg-[#F5F5F5] border-none rounded-none ">
        <div className="flex gap-2 justify-between px-5 mt-4">
          <div>
            <img
              src="https://i.pravatar.cc/100?img=7"
              alt=""
              className="rounded-full size-11"
            />
          </div>
          <div>
            <div className="flex items-center w-full justify-between">
              <div className="">
                <CardTitle className="text-sm">George</CardTitle>
                <CardDescription className="text-sm">@georgeSZ</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="rounded-none">
                Follow
              </Button>
            </div>
            <CardDescription className="text-sm">
              I design digital products and ventures.
            </CardDescription>
          </div>
        </div>
        <div className="flex gap-2 justify-between px-5  mt-4">
          <div>
            <img
              src="https://i.pravatar.cc/100?img=8"
              alt=""
              className="rounded-full size-11"
            />
          </div>
          <div>
            <div className="flex items-center justify-between w-full">
              <div className="">
                <CardTitle className="text-sm">Nettie Schuster</CardTitle>
                <CardDescription className=" text-sm">
                  @Precious3
                </CardDescription>
              </div>
              <Button variant="outline" className="rounded-none" size="sm">
                Follow
              </Button>
            </div>
            <CardDescription className="text-sm">
              The No Code SaaS Guy. Building a portfolio of software companies.
            </CardDescription>
          </div>
        </div>
        <div className="flex gap-2 justify-between  px-5 mt-4">
          <div>
            <img
              src="https://i.pravatar.cc/100?img=9"
              alt=""
              className="rounded-full size-11"
            />
          </div>
          <div>
            <div className="flex items-center justify-between w-full">
              <div className="">
                <CardTitle className="text-sm">Mrs. Lola Rohan</CardTitle>
                <CardDescription className=" text-sm">
                  @collin_marks
                </CardDescription>
              </div>
              <Button variant="outline" className="rounded-none" size="sm">
                Follow
              </Button>
            </div>
            <CardDescription className="text-sm">
              I design digital products and ventures.
            </CardDescription>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineFollowsers;
