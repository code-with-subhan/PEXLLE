import { Button } from "@/components/ui/button";
import React from "react";

const LeadsCompanyInformation = () => {
  return (
    <div className="bg-[#F5F5F5] w-[300px] p-6 py-7">
      <div className="flex gap-3">
        <img
          src="https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Flogo.clearbit.com%2Fgoogle.com&w=48&q=75"
          alt=""
        />
        <div>
          <h3 className="font-bold">Google inc.</h3>
          <p className="text-sm text-[#8b8b8b]">google.com</p>
        </div>
      </div>
      <div className="mt-3 my-6 grid grid-rows-2 gap-1">
        <p className="flex gap-2 items-center text-sm ">
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
            className="lucide lucide-mail h-4 w-4 text-muted-foreground"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          contact@google.com
        </p>
        <p className="flex gap-2 items-center text-sm">
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
            className="lucide lucide-phone h-4 w-4 text-muted-foreground"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>{" "}
          (405) 555-0128
        </p>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div className="flex items-center gap-2 font-bold text-[1rem]">
          Deals <div className=" px-2 py-[2px] flex items-center justify-center bg-black text-white text-xs font-normal">2</div>
        </div>
        <div className="text-sm font-medium">View all</div>
      </div>
      <Button className="rounded-none w-full text-right my-6 mt-9" variant='outline' size='sm'>+ Create new deal</Button>
      <div className="flex flex-col gap-5">
        <div className="bg-white text-black p-4 pb-10 flex flex-col gap-1 border border-gray-300 ">
          <p className="text-[#8b8b8b] text-sm">Closing date: 18 Jan 2021</p>
          <h6 className="text-sm font-semibold">Web development</h6>
          <h2 className="text-xl font-bold">$120,000</h2>
        </div>
        <div className="bg-white text-black p-4 pb-10 flex flex-col gap-1 border border-gray-300">
          <p className="text-[#8b8b8b] text-sm">Closing date: 22 Feb 2021</p>
          <h6 className="text-sm font-semibold">Mobile app development</h6>
          <h2 className="text-xl font-bold">$85,000</h2>
        </div>
      </div>
    </div>
  );
};

export default LeadsCompanyInformation;
