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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const ForgetPassword = () => {
  return (
    <Dialog>
      <DialogTrigger className="rounded-none">
        {" "}
        <p
          className="mr-auto text-xs mt-1 cursor-pointer text-left underline-offset-2 hover:underline text-[#F05454] font-semibold"
        >
          Forgot Password ?
        </p>
      </DialogTrigger>
      <DialogContent className="rounded-none">
        <DialogHeader>
          <DialogTitle>Reset Password
          </DialogTitle>
          <DialogDescription>
          Enter your email address and we'll send you instructions to reset your password.
          </DialogDescription>
        </DialogHeader>
        <Label>Email</Label>
        <Input placeholder="m@example.com" className="rounded-none focus:border-none shadow-none border-none bg-[#f5f5f5]"/>
        <Button  className="w-full bg-[#F05454] hover:bg-[#F05445] rounded-none">Send Reset Instructions</Button>
       
      </DialogContent>
    </Dialog>
  );
};

export default ForgetPassword;
