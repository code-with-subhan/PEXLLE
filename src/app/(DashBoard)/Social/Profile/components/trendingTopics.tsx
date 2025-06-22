import React from "react";
import Image from "next/image";

const trendingTopics = () => {
  return (
    <div>
      <h6 className="text-sm font-bold mb-2">Trending Topics</h6>
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex gap-2 items-center">
          <Image
            src="https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1576091160399-112ba8d25d1d%3Fw%3D100%26h%3D100%26fit%3Dcrop&w=48&q=75"
            alt=""
            width={1080}
            height={920}
            className="w-12"
          />
          <div>
            <h6 className="font-semibold text-sm text-[#0C0A09]">Global Climate Summit 2024</h6>
            <p className="text-[#0C0A09] text-sm">Trending with 5243 posts</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1576091160399-112ba8d25d1d%3Fw%3D100%26h%3D100%26fit%3Dcrop&w=48&q=75"
            alt=""
            width={1080}
            height={920}
            className="w-12"
          />
          <div>
            <h6 className="font-semibold text-sm text-[#0C0A09]">AI Breakthrough in Healthcare</h6>
            <p className="text-[#0C0A09] text-sm">
              2890 posts in the last hour
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1516849677043-ef67c9557e16%3Fw%3D100%26h%3D100%26fit%3Dcrop&w=48&q=75"
            alt=""
            width={1080}
            height={920}
            className="w-12"
          />
          <div>
            <h6 className="font-semibold text-sm text-[#0C0A09]">AI Breakthrough in Healthcare</h6>
            <p className="text-[#0C0A09] text-sm">
              2890 posts in the last hour
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default trendingTopics;
