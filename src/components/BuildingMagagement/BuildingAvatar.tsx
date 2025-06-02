import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const BuildingAvatar = () => {
    return (
        <div>
            <div className="*:data-[slot=avatar]:ring-background my-3 flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                    <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarImage
                        src="https://i.pravatar.cc/150?u=staff4"
                        alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarImage
                        src=""
                        alt="+1"
                    />
                    <AvatarFallback>+1</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default BuildingAvatar
