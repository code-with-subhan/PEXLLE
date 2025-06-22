"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const NotificationAccount = () => {
  return (
    <div className="mx-5">
      <h6 className="text-sm font-bold">Notification Preferences</h6>
      <p className="text-[#8A8A8A] text-sm font-medium">
        Customize how you receive notifications
      </p>
      <div className="mt-7">
        <div className="grid gap-2">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-sm font-semibold text-[#262628]">
                Email Notifications
              </h2>
              <p className="text-[#8A8A8A] text-sm font-medium">
                Receive email notifications
              </p>
            </div>
            <div>
              <Switch />
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div>
              <h2 className="text-sm font-semibold text-[#262628]">
                Push Notifications
              </h2>
              <p className="text-[#8A8A8A] text-sm font-medium">
                Receive push notifications
              </p>
            </div>
            <div>
              <Switch />
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div>
              <h2 className="text-sm font-semibold text-[#262628]">
                SMS Notifications
              </h2>
              <p className="text-[#8A8A8A] text-sm font-medium">
                Receive sms notifications
              </p>
            </div>
            <div>
              <Switch />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-sm font-semibold text-[#262628]">
                In-app Notifications
              </h2>
              <p className="text-[#8A8A8A] text-sm font-medium">
                Receive sms notifications
              </p>
            </div>
            <div>
              <Switch />
            </div>
          </div>
        </div>
      </div>
      <h6 className="text-sm font-semibold text-[#262628] mt-7">
        Notification Categories
      </h6>
      <div className="grid gap-4 mt-4">
        <div className="flex gap-2 items-center text-sm text-[#666667] font-semibold cursor-not-allowed">
          <Switch className="cursor-not-allowed" disabled checked /> Account Activity
        </div>
        <div className="flex gap-2 items-center text-sm text-[#666667] font-semibold cursor-not-allowed">
          <Switch className="cursor-not-allowed" disabled checked/> New features
        </div>
        <div className="flex gap-2 items-center text-sm text-[#666667] font-semibold cursor-not-allowed">
          <Switch className="cursor-not-allowed" disabled checked/> Marketing
        </div>
        <div className="flex gap-2 items-center text-sm text-[#666667] font-semibold cursor-not-allowed">
          <Switch className="cursor-not-allowed" disabled checked/> Security alerts
        </div>
      </div>
      <Button className="bg-black rounded-none mt-5">Save Preferences</Button>

    </div>
  );
};

export default NotificationAccount;

// #F5F5F5
