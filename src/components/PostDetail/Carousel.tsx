"use client";
import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselIndicator,
    CarouselItem,
} from "@/components/ui/carousel";
import { ZoomIn } from "lucide-react";

type img = string;

const ImagesArray: img[] = [
    "https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1517059224940-d4af9eec41b7%3Fauto%3Dformat%26fit%3Dcrop%26w%3D1920%26q%3D80&w=1920&q=75",
    "https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527443154391-507e9dc6c5cc%3Fauto%3Dformat%26fit%3Dcrop%26w%3D1920%26q%3D80&w=1920&q=75",
    "https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527443195645-1133f7f28990%3Fauto%3Dformat%26fit%3Dcrop%26w%3D1920%26q%3D80&w=1920&q=75",
    "https://pexlledn.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1551645120-d70bfe84c826%3Fauto%3Dformat%26fit%3Dcrop%26w%3D1920%26q%3D80&w=1920&q=75",
];
export function CarouselBasic() {
    return (
        <div className="relative  max-w-2xl">
            <Carousel className="relative">
                <div className="absolute top-7 w-5 h-5  z-10 right-8 flex justify-center items-center rounded-full bg-gray-200">
                    <ZoomIn className="w-3"/>
                </div>
                <CarouselContent>
                    {ImagesArray.map(e => (
                        <CarouselItem className="p-4">
                                <img src={e} alt="" className="w-full h-98 object-cover"/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNavigation alwaysShow className="absolute" />
                <CarouselIndicator className="absolute" />
            </Carousel>
        </div>
    );
}
