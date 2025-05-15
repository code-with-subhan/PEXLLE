"use client";
import React from "react";
import { TimeLineAllComments } from "./TimelineComments";
import { Button } from "../ui/button";
import {
  Bookmark,
  Ellipsis,
  Heart,
  MessageSquare,
  MessagesSquare,
  Repeat,
  Upload,
} from "lucide-react";
const TimelineAllComments = () => {
  return (
    <div className="w-full">
      {TimeLineAllComments.map((e) => (
        <div key={e.id} className="border-t border-[#F5F5F5] p-5 flex gap-2 w-full">
          <div>
            <img src={e.profileImage} alt="" className="rounded-full size-11" />
          </div>
          <div className="w-full">
            <div className="inline-flex gap-1 items-center w-full">
              <span className="font-medium text-sm">{e.Title}</span>
              <span className="text-[#737373] text-sm">{e.subtitle}</span> ·
              <span className="text-sm text-[#737373]">{e.Time}</span>
              <Button className="ml-auto rounded-none block" variant='ghost' >
                <Ellipsis />
              </Button>
            </div>
            <div className="text-sm my-3">{e.description}</div>
            {e.img && <img src={e.img} className="my-2" />}
            <div className="flex items-center justify-between my-2">
              <div className="text-[#737373] text-sm flex gap-1">
                <Button variant="ghost" className="rounded-none" size='sm'>
                  <Heart />
                  {e.favouriteCount}
                </Button>
                <Button variant="ghost" className="rounded-none" size='sm'>
                  <Repeat />
                  {e.share}
                </Button>
                <Button variant="ghost" className="rounded-none" size='sm'>
                  <MessageSquare />
                  {e.messages}
                </Button>
              </div>
              <div className="text-[#737373] text-sm flex gap-1">
                <Button variant='ghost' className="rounded-none">
                  <Bookmark />
                </Button>
                <Button variant='ghost' className="rounded-none">
                  <Upload />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineAllComments;
