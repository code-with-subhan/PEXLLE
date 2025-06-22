"use client"
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostsProfile from "./PostsProfile";
import Link from "next/link";
import { ProfileFormDialogue } from "./ProfileFormDialogue";
import CombineDivProfile from "./CombineDivProfile";
import { useRef, useState } from "react";
import Image from "next/image";
const WholeProfile = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<string | null>(null);
    const [image2, setImage2] = useState<string | null>(null);
    return (
        <div className="lg:flex gap-2 p-2.5 px-0 justify-between grid">
            <div className="h-auto">
                <div>
                    <Image
                        src={
                            image ||
                            "https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470071459604-3b5ec3a7fe05%3Fw%3D1200%26h%3D400%26fit%3Dcrop&w=1920&q=75" // fallback
                        }
                        alt="190"
                        blurDataURL="blur"
                        width={1080}
                        height={780}
                        className=""
                    />
                </div>
                <div className="flex gap-2.5 items-end mx-3 -translate-y-3.5">
                    <div className="p-1 bg-white rounded-full">
                        <Image
                            src={
                                image2 ||
                                "https://i.pravatar.cc/150?img=3" // fallback
                            }
                            alt="abcd"
                            width={1080}
                            height={780}
                            blurDataURL="blur"
                            className="rounded-full w-22 h-22"
                        />
                    </div>
                    <div>
                        <h5 className="font-bold text-xl">Kohaku Tora</h5>
                        <p className="text-[#737373] text-sm ">@kohaku_tora</p>
                    </div>
                    <div className="ml-auto">
                        <ProfileFormDialogue
                            ref={fileInputRef}
                            image={image}
                            setImage={setImage}
                            image2={image2}
                            setImage2={setImage2}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-[#0C0A09]">
                        Hey, I am Kohaku, a UI/UX Designer who loves crafting seamless
                        digital experiences!
                    </p>
                    <div className="flex gap-2">
                        <div className="flex  items-center ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-map-pin mr-1 h-4 w-4 text-[#737373]"
                            >
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span className="text-sm text-[#737373]">New York City</span>
                        </div>
                        <div className="flex  items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-link ml-4 mr-1 h-4 w-4 text-[#737373]"
                            >
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                            <Link href="https://pexlledn.vercel.app">
                                <span className="text-sm text-blue-500 hover:underline">pexlledn.vercel.app</span>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-calendar ml-4 mr-1 h-4 w-4 text-[#737373]"
                            >
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                            </svg>
                            <span className="text-sm text-[#737373]">Joined September 2020</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-sm text-[#737373]"><span className="font-bold text-black">1,234 </span> Following</div>
                        <div className="text-sm text-[#737373]"><span className="font-bold text-black">5,678</span> Followers</div>
                    </div>
                </div>
                <Tabs defaultValue="Posts" className="my-4">
                    <TabsList className="w-full rounded-none">
                        <TabsTrigger value="Posts"  className="rounded-none">Posts</TabsTrigger>
                        <TabsTrigger value="Replies" className="rounded-none">Replies</TabsTrigger>
                        <TabsTrigger value="Media" className="rounded-none">Media</TabsTrigger>
                        <TabsTrigger value="Likes" className="rounded-none">Likes</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Posts">
                        <PostsProfile />
                    </TabsContent>
                    <TabsContent value="Replies"></TabsContent>
                    <TabsContent value="Media"></TabsContent>
                    <TabsContent value="Likes"></TabsContent>
                </Tabs>
            </div>
            <div className="lg:w-1/2 ">
                <CombineDivProfile />
            </div>
        </div>
    );
}

export default WholeProfile
