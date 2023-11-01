import { Button } from "./ui/button"

export const CtaBlockPage = ()=>{
    return (
        <div>
            <div className="flex flex-col justify-center items-center text-black
            md:text-white s ">
                <h3 className="text-3xl text-center">I am a Fullstack Developer</h3>
                <p className="p-2 text-center">I am on EST Timezone.</p>
                <Button className="bg- bg-blue-500 my-4 ">MORE ABOUT ME</Button>
            </div>
        </div>
    )
}