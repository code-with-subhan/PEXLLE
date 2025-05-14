"use client"
import { MessageSquare } from "lucide-react";
import React from "react";

const profileDescriptionEducation = () => {
  return (
    <div>
      <div className="flex gap-3 my-10 px-4 items-center">
        <img
          src="https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fi.pravatar.cc%2F128&w=64&q=75"
          alt=""
          className="rounded-full"
        />
        <div>
          <h6 className=" text-sm text-[#787878] font-medium">A course by</h6>
          <p className="text-black text-sm font-semibold">Blend Smith</p>
        </div>
      </div>
      <h1 className="font-bold text-3xl ">Advanced 3D Modelling in Blender</h1>
      <p className="text-[#737373] mt-7 text-[1rem]">
        Embark on a creative journey and master the art of crafting your unique
        3D character using Blender. Dive into the fascinating process of
        bringing your imaginative ideas to life as you explore the intricate
        features of Blender.
      </p>
      <p className="text-[#737373] mt-7 text-[1rem]">
        Unleash your creativity as you learn to meticulously model, enhance
        details, and skillfully manipulate light and color. With each step,
        you'll unveil the captivating characters residing in your mind and
        unleash them upon the world, all while enjoying an exhilarating and
        enjoyable experience.
      </p>
      <div className="my-10 grid grid-rows-2 gap-4">
        <div className="grid grid-cols-2 ">
          <div className="flex items-center gap-2">
            <MessageSquare className="text-[#737373] w-5" />
            <div>
              <p className="text-sm  text-[#737373]">Language:</p>
              <h6 className="font-bold  text-sm text-[#0C0A09]">English</h6>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <MessageSquare className="text-[#737373] " />
              <div>
                <p className="text-sm text-[#737373]">Subtitles:</p>
                <h6 className="font-bold text-sm text-[#0C0A09]">
                  English, Spanish, French, Italian, Russian, Polish,
                  Dutch,German
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex items-center gap-2">
            <MessageSquare className="text-[#737373] w-5" />
            <div>
              <p className="text-sm text-[#737373]">Critique session:</p>
              <h6 className="font-bold text-sm text-[#0C0A09]">
                Individual recordings
              </h6>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
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
                className="lucide lucide-award h-5 w-5 text-muted-foreground"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
              <div>
                <p className="text-sm text-[#737373]">Certificate:</p>
                <h6 className="font-bold text-sm text-[#1d1917]">
                  Upon completion of the course
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profileDescriptionEducation;
