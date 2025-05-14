"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

const EducationInformation = () => {
  return (
    <div className="pl-14 pt-3">
      <Badge
        className="flex bg-[#CCCCCC] p-2 px-4 border border-[#adacac] items-center font-bold text-4xl rounded-full"
        variant="secondary"
      >
        49.99 <span className="text-xl">USD</span>
      </Badge>
      <div className="my-7 flex flex-col gap-4 w-[80%]">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-message-square h-5 w-5 text-muted-foreground"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <div>
                <p className="text-sm text-[#737373]">LESSONS</p>
                <h6 className="font-bold text-sm text-[#1d1917]">12</h6>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-award h-5 w-5 text-muted-foreground"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
                <div>
                  <p className="text-sm text-[#737373]">DIFFICULTY</p>
                  <h6 className="font-bold text-sm text-[#1d1917]">Moderate</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-users h-5 w-5 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <div>
              <p className="text-sm text-[#737373]">Students:</p>
              <h6 className="font-bold text-sm text-[#1d1917]">3,215 </h6>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-clock h-5 w-5 text-muted-foreground"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div>
              <p className="text-sm text-[#737373]">Duration:</p>
              <h6 className="font-bold text-sm text-[#1d1917]">8h 23m</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-download h-5 w-5 text-muted-foreground"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" x2="12" y1="15" y2="3"></line>
            </svg>
            <div>
              <p className="text-sm text-[#737373]">Additional resources: :</p>
              <h6 className="font-bold text-sm text-[#1d1917]">12 files</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Button className="bg-black rounded-none" size="sm">Enroll a course</Button>
        <Button variant="outline" className="rounded-none" size="sm">Buy as a gift</Button>
      </div>
    </div>
  );
};

export default EducationInformation;
