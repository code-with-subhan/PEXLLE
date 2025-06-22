"use server"
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Theme from "@/components/Home/Theme";
import LoginButton from "@/components/AuhButton/LoginButton";
import { auth } from "@/Auth";
import LogOutButton from "@/components/AuhButton/LogoutButton";
import Image from 'next/image';


const Home = async () => {
  const session = await auth()
  console.log(session)
  console.log("GITHUB_ID:", process.env.GITHUB_ID)
  return (
    <>
      <main className="bg-gradient-to-br from-white-100 to-[#f69a9a] v">
        <div className="p-4 sm:px-19 px-3  z-10 grid gap-6 ">
          <div className="  m-auto w-full sticky flex justify-between items-center p-2.5 px-7 lg:w-1/2  bg-[rgba(255,255,255,0.5)]  shadow-md  top-2 z-10 backdrop-blur-xl">
            <div className="relative">
              <Image
                src="https://pexlledn.vercel.app/_next/image?url=%2Fpexlleh.png&w=256&q=75"
                alt="Pexlle"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <ul className="flex gap-7 items-center">
              {session?.user?.name ?
                <>
                  <Link href="http://localhost:3000//DashBoard">
                    <li className="text-sm cursor-pointer border-none" >DashBoard</li>
                  </Link>
                  <Link href="http://localhost:3000//Calculator">
                    <li className="text-sm cursor-pointer">Calculator</li>
                  </Link>
                  <LogOutButton />
                </>
                :
                <LoginButton />
              }
            </ul>
            <div className="p-1 px-2 hover:bg-muted">
              <Theme />
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <Button
              className="m-auto inset-0 animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%]  rounded-full cursor-pointer ![mask-composite:subtract]   "
              size="sm"
            >
              🎉 | Introducing Pexlle
            </Button>
          </div>
          <h1 className="text-5xl  text-center font-semibold mt-2">
            <span className="text-5xl text-gradient_indigo-purple mb-4 sm:w-full">
              Build your
            </span>{" "}
            website Beautifully.
          </h1>
          <p className="text-center lg:w-1/2 drop-shadow-2xl dropshw text-[#534342] m-auto text-[1.1rem]">
            My aim is to start a journey where we build beautiful looking
            websites, Shadcn provided the best components so far, Vercel made it
            easier than ever to deploy your project. Let the journey start!.
          </p>
          <div className="flex justify-center mt-7">
            <Button
              className="m-auto rounded-none cursor-pointer"
              size="sm"
              variant="destructive"
            >
              Enter the demo
            </Button>
          </div>
          <div className="flex relative mb-50 lg:mx-20">
            <Image
              src="https://pexlledn.vercel.app/dashboard.png"
              width={1080}
              height={720}
              alt="large pic"
              placeholder="blur"
              blurDataURL="blur"
              className="w-full h-auto object-contain" // ✅ maintain aspect ratio
              />

              <Image
                src="https://pexlledn.vercel.app/mdashboard.png"
                alt="small pic"
                width={400}
                height={300}
                placeholder="blur"
                blurDataURL="blur"
                className="absolute bottom-0 xL:right-[0%] lg:right-[-12%] lg:block hidden max-h-[540px] h-[100%] object-contain" // ✅ fixed right and h-auto
              />
          </div>
          <div className="relative">
            <Image
              src="https://pexlledn.vercel.app/_next/image?url=%2Fpexlleh.png&w=256&q=75"
              alt="pexlle"
              width={150}
              height={150}
              className="m-auto w-[150px]"
            />
          </div>
          <div className="grid gap-2 mb-2">
            <p className="text-center text-muted-foreground">
              © 2024 Pexlle Inc. All rights reserved.
            </p>
            <div className="m-auto flex gap-3 items-center w-full justify-center text-muted-forground ">
              <span className="text-muted-foreground text-sm hover:text-black cursor-pointer">
                Terms
              </span>
              <span className="text-muted-foreground text-sm hover:text-black cursor-pointer">
                Privacy
              </span>
              <span className="text-muted-foreground text-sm hover:text-black cursor-pointer">
                Contact
              </span>
            </div>
          </div>
          <div className="fixed right-0 bottom-0 gap-4 z-[-1] left-0 top-0 bg-red grid grid-cols-90 grid-rows-90 p-2 overflow-hidden">
            {[...Array(4000)].map((e, i) => (
              <div className="h-[2px] w-[2px] rounded-full bg-[#b0b0b0] " key={i}></div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
