
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

export const UserAvatar = ()=>{
    

    return (
        
            <Avatar className="h-8 w-8">
                <AvatarImage src='' />

                <AvatarFallback>
                  You
                </AvatarFallback>
            </Avatar>
    )
}