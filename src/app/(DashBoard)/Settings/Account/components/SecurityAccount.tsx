"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { IconMobiledata } from "@tabler/icons-react";
import { Globe, Smartphone, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const SecurityAccount = () => {
  return (
    <div className="mx-5">
      <h6 className="text-sm font-bold">Password</h6>
      <p className="text-[#8A8A8A] text-sm font-medium">
        Change your password or enable two-factor authentication
      </p>
      <div className="grid grid-rows-3 gap-5 mt-8">
        <div className="flex flex-col gap-3">
          <Label>Current Password</Label>
          <Input className="bg-[#F5F5F5] rounded-none" />
        </div>
        <div className="flex flex-col gap-3">
          <Label>New Password</Label>
          <Input className="bg-[#F5F5F5] rounded-none" />
        </div>
        <div className="flex flex-col gap-3">
          <Label>Confirm New Password</Label>
          <Input className="bg-[#F5F5F5] rounded-none" />
        </div>
      </div>
      <Button className="rounded-none bg-black mt-6" size="sm">
        Change Password
      </Button>
      <div className="mt-17">
        <h6 className="text-sm font-bold">Two-Factor Authentication</h6>
        <p className="text-[#8A8A8A] text-sm font-medium">
          Protect your account with 2FA
        </p>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div>
          <h6 className="text-sm font-normal">Two-Factor Authentication</h6>
          <p className="text-[#8A8A8A] text-sm font-medium">
            Add an extra layer of security
          </p>
        </div>
        <Switch />
      </div>
      <div className="flex gap-2 mt-5">
        <Badge variant="outline">
          <IconMobiledata /> SMS
        </Badge>
        <Badge variant="outline">
          <Globe /> Authenticator App
        </Badge>
      </div>
      <Button variant="outline" className="rounded-none mt-4 text-sm" size="sm">
        Set Up 2FA
      </Button>
      <div className="mt-16">
        <h6 className="text-sm font-bold">Active Sessions</h6>
        <p className="text-[#8A8A8A] text-sm font-medium">
          Manage your active sessions and devices
        </p>
      </div>
      <div className="flex mt-6">
        <Button variant='secondary' size='icon' className="mr-4 rounded-full">
          <Smartphone />
        </Button>
        <div>
          <h6 className="text-sm font-bold">MacBook Pro</h6>
          <p className="text-[#8A8A8A] text-sm font-medium">
            San Francisco, CA • 2 minutes ago
          </p>
        </div>
        <Button className="ml-auto" variant="ghost">
          <X />
          End Session
        </Button>
      </div>
      <div className="flex">
        <Button variant='secondary' size='icon' className="mr-4 rounded-full">
          <Smartphone />
        </Button>
        <div>
          <h6 className="text-sm font-bold">iPhone 12</h6>
          <p className="text-[#8A8A8A] text-sm font-medium">
            New York, NY • 1 hour ago
          </p>
        </div>
        <Button className="ml-auto" variant="ghost">
          <X />
          End Session
        </Button>
      </div>
    </div>
  );
};

export default SecurityAccount;
