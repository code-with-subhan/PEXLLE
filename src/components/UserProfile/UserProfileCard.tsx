"use client";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";
import {  ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function UserProfileCards() {
  return (
      <MorphingDialog
        transition={{
          type: "spring",
          bounce: 0.05,
          duration: 0.25,
        }}
      >
        <MorphingDialogTrigger
          style={{
            borderRadius: "0px",
          }}
          className="flex lg:max-w-[240px] shadow-md shadow-[rgba(0,0,0,0.6)]     flex-col overflow-hidden rounded-none border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 "
        >
          <MorphingDialogImage
            src="data:image/jpeg;base64,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"
            alt="A desk "
            className="h-88 rounded-nonep-2 w-full object-cover hover:scale-105 "
          />
          <div className="w-full px-2 absolute  bottom-2">

          <div className="flex flex-col w-full p-4 bg-[rgba(0,0,0,0.5)]  gap-2 text-white">
            <Badge className="" variant="secondary">Electronics</Badge>
            <p className="text-left text-sm w-full">
              Create amazing
            </p>
            <div className="flex items-center text-white gap-1">
                <h2 className="font-bold text-sm">$45.78</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide ml-auto lucide-star w-4 h-4 text-yellow-400 fill-yellow-400"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="font-semibold text-sm">4.4</span>
            </div>
          </div>
          </div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent
            style={{
              borderRadius: "24px",
            }}
            className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
          >
            <MorphingDialogImage
              src="data:image/jpeg;base64,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"
              alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
              className="h-full w-full"
            />
            <div className="p-6">
              <MorphingDialogTitle className="text-xl text-zinc-950 dark:text-zinc-50">
                Wireless Earbuds
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className="text-zinc-700 text-sm dark:text-zinc-400">
                Electronics
              </MorphingDialogSubtitle>
              <MorphingDialogDescription
                disableLayoutAnimation
                variants={{
                  initial: { opacity: 0, scale: 0.8, y: 100 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 100 },
                }}
              >
                <div className="h-23 p-4 border border-[#F5F5F5] text-sm my-3 text-[#737373]">
                  Create amazing audio experiences in seconds
                </div>
                <div className="mt-3 flex items-center">
                  <div className="flex items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-star w-4 h-4 text-yellow-400 fill-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-star w-4 h-4 text-yellow-400 fill-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-star w-4 h-4 text-yellow-400 fill-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-star w-4 h-4 text-yellow-400 fill-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-4 h-4 text-zinc-300"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                    <span className="text-sm">4.4</span>
                  <h1 className="ml-auto text-[#737373] text-sm font-normal">3456 sold</h1>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <h2 className="font-bold text-xl">$45.45</h2>
                  <Button className="rounded-none">
                    <ShoppingCart /> Add to Cart
                  </Button>
                </div>
              </MorphingDialogDescription>
            </div>
            <MorphingDialogClose className="text-zinc-50" />
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>
  );
}
