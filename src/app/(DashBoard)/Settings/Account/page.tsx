import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileAccount from "./components/ProfileAccount";

import NotificationAccount from "./components/NotificationAccount";
import PreferencesAccount from "./components/PreferencesAccount";
import SecurityAccount from "./components/SecurityAccount";
import { Button } from "@/components/ui/button";
import { LogOut, Trash2 } from "lucide-react";

const page = () => {
  return (
    <div className="lg:px-25 py-10">
      <h1 className="text-3xl font-medium">Account Settings </h1>
      <p className="text-[#7D7D7D] font-normal text-sm mb-7">Manage your account preferences and settings</p>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="rounded-none bloack w-full mb-10">
          <TabsTrigger value="Profile" className="rounded-none">Profile</TabsTrigger>
          <TabsTrigger value="Notification" className="rounded-none">Notification</TabsTrigger>
          <TabsTrigger value="Preferences" className="rounded-none">Preferences</TabsTrigger>
          <TabsTrigger value="Security" className="rounded-none">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="Profile"><ProfileAccount /></TabsContent>
        <TabsContent value="Notification"><NotificationAccount /></TabsContent>
        <TabsContent value="Preferences"><PreferencesAccount /></TabsContent>
        <TabsContent value="Security"><SecurityAccount /></TabsContent>
      </Tabs>
      <div className="lg:flex grid grid-cols-1 gap-3 justify-between items-center mt-16">
        <Button className="text-red-400 rounded-none" variant='outline' >
          <LogOut />
          Log out of all devices
        </Button>
        <Button className=" rounded-none" variant='destructive' >
          <Trash2 /> Delete Account
        </Button>
      </div>

      
    </div>
  );
};

export default page;
