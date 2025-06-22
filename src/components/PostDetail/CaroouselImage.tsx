import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import { ZoomIn } from "lucide-react"
import Image from "next/image"

export function CarouselImage({img} : {img : string}) {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <div className="absolute top-7 w-9 h-8  z-10 right-8 flex justify-center items-center rounded-full bg-gray-200">
                        <ZoomIn className="w-4" />
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[80%]">
                  <Image src={img} alt="a" blurDataURL="blur" width={1080} height={780} className=" h-full" />
                </DialogContent>
            </form>
        </Dialog>
    )
}
