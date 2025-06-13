import { Button } from "@/components/ui/button";
import React from "react";

const EditProfile = () => {
  return (
    <div className="w-1/5 lg:block hidden">
      <div className="bg-[#F5F5F5] p-3">
        <div className="flex justify-between gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="w-19 h-19 rounded-full "
          />
          <div>
            <h6 className="text-sm font-bold">Revaldo</h6>
            <p className="text-sm text-[#737373] ">UI Designer</p>
            <p className="text-sm text-[#737373] ">Surakarta, Central Java, ID</p>
          </div>
        </div>
        <Button variant="outline" className="rounded-none w-full mt-4">Edit Profile</Button>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 my-3">
        <div className="bg-[#F5F5F5] p-3">
          <p className="text-[#737373] h-1/4 text-sm font-bold text-center flex flex-wrap  m-auto">Search Result</p>
          <h4 className="text-4xl font-bold mt-5 mb-1 text-center">22</h4>
          <div className="text-[#737373] text-sm text-center">views</div>
        </div>
        <div className="bg-[#F5F5F5] p-3">
          <p className="text-[#737373] h-1/4 text-sm font-bold text-center flex flex-wrap m-auto">Applied Job</p>
          <h4 className="text-4xl font-bold mt-5 mb-1 text-center">12</h4>
          <div className="text-[#737373] text-sm text-center">Job</div>
        </div>
        <div className="bg-[#F5F5F5] p-3">
          <p className="text-[#737373] h-1/4 text-sm font-bold text-center flex flex-wrap m-auto">Post Views</p>
          <h4 className="text-4xl font-bold mt-5 mb-1 text-center">268</h4>
          <div className="text-[#737373] text-sm text-center">views</div>
        </div>
        <div className="bg-[#F5F5F5] p-3">
          <p className="text-[#737373] h-1/4 text-sm font-bold text-center flex flex-wrap m-auto">Experience</p>
          <h4 className="text-4xl font-bold mt-5 mb-1 text-center">5</h4>
          <div className="text-[#737373] text-sm text-center">Month</div>
        </div>
      </div>
      <div className="bg-[#F5F5F5] p-3">
        <div className="font-bold text-sm text-[#737373] mb-3">345 Profile View</div>
        <img
          src="https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1551288049-bebda4e38f71%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D2070%26q%3D80&w=256&q=75"
          alt=""
        />
      </div>
    </div>
  );
};

export default EditProfile;
