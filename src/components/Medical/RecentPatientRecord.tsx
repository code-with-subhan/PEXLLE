import React from "react";
import { CardDescription, CardTitle } from "../ui/card";
import { RecentData } from "./RecentData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "../ui/badge";

const RecentPatientRecord = () => {
  return (
    <div className="border border-[#F5F5F5] p-6 w-1/2">
      <CardTitle className="text-sm">Recent Patients</CardTitle>
      <CardDescription>You have 5 patients in total</CardDescription>
      <div className="mt-2 flex flex-col gap-6">
        {RecentData.map((e) => (
          <div key={e.id} className="flex items-center gap-2">
            <div>
              <Avatar>
                <AvatarImage src="" alt="@shadcn" />
                <AvatarFallback>{e.title.slice(0,1)}</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <CardTitle className="text-sm">{e.title}</CardTitle>
              <CardDescription>{e.subTitle}</CardDescription>
            </div>
            <div className="ml-auto">
              <Badge className={`${e.textColor} ${e.background} rounded-full`} variant='secondary' >
                {e.BadgeName}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPatientRecord;
