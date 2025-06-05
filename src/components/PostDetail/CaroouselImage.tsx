import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ZoomIn } from "lucide-react"

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
                  <img src={img} alt="" className=" h-full" />
                </DialogContent>
            </form>
        </Dialog>
    )
}
