import { useUser } from "@clerk/nextjs"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

export const UserAvatar = ()=>{
    const { user } = useUser()

    return (
        
            <Avatar className="h-8 w-8">
                <AvatarImage src='' />

                <AvatarFallback>
                  You
                </AvatarFallback>
            </Avatar>
    )
}