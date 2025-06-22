import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function SalesCardDashBoard({classNam} : {classNam : string}) {
  return( 
    <Card className={`lg:w-1/2 pr-4 rounded-none  shadow-none ${classNam}`}>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent className="w-full ml-2 p-3 grid gap-6">
        <div className="flex items-center gap-4 ">
          <div>
            <Image
              src="https://material-kit-pro-react.devias.io/assets/avatar-5.png" 
              alt="blur" 
              width={1080}
              height={780}
              blurDataURL="blur"
              className=" rounded-full w-9"

            />
          </div>
          <div>
            <h1 className="font-semibold text-[.8rem]">Olivia Martin</h1>
            <CardDescription>olivia.martin@email.com</CardDescription>
          </div>
          <div className="ml-auto text-xs font-bold">
            <span>+$1,999.00</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Image
              src="https://material-kit-pro-react.devias.io/assets/avatar-3.png" 
              className="w-9 rounded-full"
              alt="blur"
              width={1080}
              height={780}
              blurDataURL="blur"
            />
          </div>
          <div>
            <h1 className="font-semibold text-[.8rem]">Jackson Lee</h1>
            <CardDescription>jackson.lee@email.com</CardDescription>
          </div>
          <div className="ml-auto text-xs font-bold">
            <span>+$10.00</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Image
              src="https://material-kit-pro-react.devias.io/assets/avatar-4.png" 
              className="w-9 rounded-full"
              alt="blur"
              width={1080}
              height={780}
              blurDataURL="blur"
            />
          </div>
          <div>
            <h1 className="font-semibold text-[.8rem]">Sana Martin</h1>
            <CardDescription>Sana.martin@email.com</CardDescription>
          </div>
          <div className="ml-auto text-xs font-bold">
            <span>+$569.00</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center w-9 rounded-full h-9">
            <h1 className="font-semibold text-[.8rem]">TI</h1>
          </div>
          <div>
            <h1 className="font-semibold text-[.8rem]">Talha Irfan</h1>
            <CardDescription>Talha.Irfan@email.com</CardDescription>
          </div>
          <div className="ml-auto text-xs font-bold">
            <span>+$333,33.00</span>
          </div>
        </div>
        <div className="flex items-center gap-4 baseline">
          <div className="flex justify-center items-center w-9 rounded-full h-9">
            <h1>RE</h1>
          </div>
          <div >
            <h1 className="font-semibold text-[.8rem]">Rafaay Ehsan</h1>
            <CardDescription>rafaay.ehsan@email.com</CardDescription>
          </div>
          <div className="ml-auto baseline text-xs font-bold">
            <span>+$3,499.00</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
