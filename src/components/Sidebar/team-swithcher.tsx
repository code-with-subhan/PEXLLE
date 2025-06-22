"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

export function TeamSwitcher({ }) {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg ">
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <Image
              src="https://pexlledn.vercel.app/_next/image?url=%2Fpexlleh.png&w=1920&q=75"
              alt="a" blurDataURL="blur" width={1080} height={780}
            />
          </div>
          <ChevronsUpDown className="ml-auto" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
