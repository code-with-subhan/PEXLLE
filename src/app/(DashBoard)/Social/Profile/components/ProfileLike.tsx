import { Button } from "@/components/ui/button";
import React from "react";

const ProfileLike = () => {
  return (
    <div>
      <h6 className="text-sm mb-2 font-bold">You might like</h6>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <img
            src="https://i.pravatar.cc/150?img=4"
            alt=""
            className="rounded-full w-10 h-10 "
          />
          <div>
            <h6 className="font-semibold text-sm text-[#0C0A09]">User Name</h6>
            <p className="text-[#0C0A09] text-sm">@username</p>
          </div>
          <Button variant="outline" className="rounded-none ml-auto">
            Follow
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt=""
            className="rounded-full w-10 h-10 "
          />
          <div>
            <h6 className="font-semibold text-sm text-[#0C0A09]">User Name</h6>
            <p className="text-[#0C0A09] text-sm">@username</p>
          </div>
          <Button variant="outline" className="rounded-none ml-auto">
            Follow
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src="https://i.pravatar.cc/150?img=6"
            alt=""
            className="rounded-full w-10 h-10 "
          />
          <div>
            <h6 className="font-semibold text-sm text-[#0C0A09]">User Name</h6>
            <p className="text-[#0C0A09] text-sm">@username</p>
          </div>
          <Button variant="outline" className="rounded-none ml-auto">
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileLike;
