import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bookmark, Ellipsis, Heart, MessageSquare, Share2 } from "lucide-react";
import Image from "next/image";

const PostsProfile = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex  pb-0 border-b">
        <div className="flex justify-center ">
          <Avatar className="w-10 h-10 mt-4">
            <AvatarImage src="https://i.pravatar.cc/150?img=1"  />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <Card className="border-none shadow-none border border-[#737373]">
          <CardHeader className="flex gap-2 items-center">
            <CardTitle className="text-sm">Moyo Shiro</CardTitle>
            <CardDescription className="text-[#737373] text-sm">@moyo_shiro · 2 hours ago</CardDescription>
            <Button variant="outline" size="icon" className="rounded-none ml-auto border-none shadow-none">
              <Ellipsis />
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-[#0C0A09] text-sm mb-2">
              Just launched my new portfolio website! 🚀 Check out these 15
              standout examples of creative, sleek, and interactive portfolio
              designs that inspired me. Which one s your favorite? #WebDesign
              #PortfolioInspiration
            </p>
            <Image
              src="https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1467232004584-a241de8bcf5d%3Fw%3D800%26h%3D600%26fit%3Dcrop&w=828&q=75"
              alt="abcd"
              width={1080}
              height={780}
              className="w-full h-[300px]"
            />
          </CardContent>
          <CardFooter className="flex justify-between items-center text-[#737373] py-0 my-0">
            <Button variant='outline' className="rounded-none shadow-none  border-none">
              <Heart />
              62
            </Button>
            <Button variant='outline' className="rounded-none shadow-none  border-none">
              <MessageSquare />
              23
            </Button>
            <Button variant='outline' className="rounded-none shadow-none  border-none">
              <Share2 />
              45
            </Button>
            <Button variant='outline' className="rounded-none shadow-none  border-none">
              <Bookmark />
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="flex  pb-0 border-b lg:border-none">
        <div className="flex justify-center ">
          <Avatar className="w-10 h-10 mt-6">
            <AvatarImage src="https://i.pravatar.cc/150?img=2"  />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <Card className="border-none shadow-none border border-[#737373]">
          <CardHeader className="flex gap-2 items-center">
            <CardTitle className="text-sm">Aiko Tanaka</CardTitle>
            <CardDescription className="text-[#737373] text-sm">@aiko_tanaka · 5 hours ago</CardDescription>
            <Button variant="outline" size="icon" className="rounded-none ml-auto border-none shadow-none">
              <Ellipsis />
            </Button>
          </CardHeader>
          <CardContent className="">
            <p className="text-[#0C0A09] text-sm mb-2">
            Exploring the intersection of AI and UX design. Here's a sneak peek at my latest project. Thoughts? #AIinDesign #UXInnovation
            </p>
            <Image
              src="https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1518770660439-4636190af475%3Fw%3D800%26h%3D600%26fit%3Dcrop&w=828&q=75"
              alt="blur"
              blurDataURL="blur"
              width={1080}
              height={780}
              className="w-full h-[300px]"
            />
          </CardContent>
          <CardFooter className="flex justify-between items-center text-[#737373] py-0 my-0">
            <Button variant='outline' className="rounded-none shadow-none  border-none">
              <Heart />
              452
            </Button>
            <Button variant='outline' className="rounded-none shadow-none  border-none">
              <MessageSquare />
              56
            </Button>
            <Button variant='outline' className="rounded-none shadow-none  border-none">
              <Share2 />
              29
            </Button>
            <Button variant='outline' className="rounded-none shadow-none  border-none">
              <Bookmark />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PostsProfile;
