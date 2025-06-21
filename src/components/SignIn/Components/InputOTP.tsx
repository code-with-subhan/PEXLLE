"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { login } from "@/lib/actions/auth";

const OTPpassword = () => {
  const a = "111111"
  let b = ''
  return (
    <main className="hidden lg:block w-full">
      <Dialog>
        <DialogTrigger className="rounded-none w-full">
          <Button
            type="submit"
            className="w-full bg-[#F05454] hover:bg-[#F05445] rounded-none cursor-pointer"
          >
            {" "}
            Log in
          </Button>
        </DialogTrigger>
        <DialogContent className="rounded-none">
          <DialogHeader>
            <DialogTitle>Enter OTP (for this demo: 111-111)</DialogTitle>
            <DialogDescription>
              Enter your email address and we'll send you instructions to reset
              your password.
            </DialogDescription>
          </DialogHeader>
          <div className="w-full flex justify-center items-center p-4">
            <InputOTP maxLength={6} onChange={() => {
              b += "1"
              if(b == "111111"){
                login()
              }
            }}>
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
        </DialogContent>
      </Dialog>
     </main>
  );
};

export default OTPpassword;
