import Link from "next/link"
import { Button } from "./ui/button"

export const Col3Cta = ()=>{
    return (
        <div>
            <div className="text-center flex justify-around items-center mx-5
            bg-white 
            shadow-2xl text-black font-bold rounded-2xl md:rounded-full
            flex-col md:flex-row lg:flex:row gap-5
             py-8 px-6 text-sm">
               
               {/* Col One */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Languages
                </p>
                <p className=" py-4 px-4">Javascript, Python,
                 HTML, CSS!</p>
                
                </div>

                 {/* Col Two */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Frameworks
                </p>
                <p className=" py-4 px-4">Django, React, Next JS, Node JS, MUI, TAILWIND!</p>
                
                </div>

                 {/* Col3 */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Cloud
                </p>
                <p className=" py-4 px-4">
                Git, Gitlab, AWS, GCP, Vercel.</p>
                
                </div>

                {/* Col4 */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Database
                </p>
                <p className=" py-4 px-6 flex flex-col md:flex lg-flex">
                Redis, postGreSQL, SQL, 
                MongoDB/ATLAS, Pinecone, Chroma.</p>
                
                </div>

            </div>
        </div>
    )
}