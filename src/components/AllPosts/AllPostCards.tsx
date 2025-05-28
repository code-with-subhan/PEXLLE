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
import { ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import RatingStars from "./RatingStars";

export function AllPostCards({ product, key }: { product: any; key: string }) {
 
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
      key={key}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "0px",
        }}
        className="flex max-w-[240px]    flex-col overflow-hidden rounded-none border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 "
      >
        <MorphingDialogImage
          src={product.image}
          alt="A desk "
          className="h-88 rounded-nonep-2 w-full object-cover hover:scale-105 transition-all duration-400 ease-in-out"
        />
        <div className="w-full p-2 absolute bottom-0">
          <div className="flex flex-col  w-full p-4 bg-[rgba(0,0,0,0.5)]  gap-2 text-white">
            <Badge className=" bg-black">{product.category}</Badge>
            <h1 className="font-bold text-xl text-left">
              {product.title.slice(0, 25)}...
            </h1>
            <p className="text-left text-sm w-full">
              {product.description.slice(0, 50)}
            </p>
            <div className="flex items-center text-white gap-1">
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
              <span className="font-bold text-sm">{product.rating.rate}</span>
              <span className="text-sm">({product.rating.count} sold)</span>
              <h2 className="font-bold ml-auto text-[1.2rem]">
                ${Math.floor(product.price)}
              </h2>
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
            src={product.image}
            alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
            className="h-[200px] object-contain "
          />
          <div className="p-6">
            <MorphingDialogTitle className="text-xl text-zinc-950 dark:text-zinc-50">
              {product.title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-700 text-sm dark:text-zinc-400">
              {product.category}
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
                {product.description.slice(0, 120)}...
              </div>
              <div className="mt-3 flex items-center">
                <RatingStars rating={product.rating.rate} />
                <span className="text-sm">{product.rating.rate}</span>
                <h1 className="ml-auto text-[#737373] text-sm font-normal">
                  {product.rating.count} sold
                </h1>
              </div>
              <div className="flex justify-between items-center mt-3">
                <h2 className="font-bold text-xl">${product.price}</h2>
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
