"use client";
import React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { login } from "@/lib/actions/auth";

const DrawerOTP = () => {
  return (
    <div className="lg:hidden block">
      <Drawer>
        <DrawerTrigger className="w-full">
          <div className="w-full">
            <Button
              type="submit"
              className="w-full bg-[#F05454] hover:bg-[#F05445] rounded-none cursor-pointer"
              onClick={() => login()}
            >
              Log in
            </Button>
          </div>
        </DrawerTrigger>
        <DrawerContent className="w-full grid items-center text-center">
          <DrawerHeader>
            <DrawerTitle>Enter OTP (for this demo: 111-111)</DrawerTitle>
            <DrawerDescription>
              Please enter the 6-digit OTP sent to your device.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex justify-center items-center mb-6">

              <InputOTP maxLength={6} >
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="rounded-none" />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <DrawerClose >
              <Button className="rounded-none w-full" variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerOTP;
