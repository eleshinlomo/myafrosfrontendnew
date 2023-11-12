import Link from "next/link"
import { Button } from "./ui/button"

export const Col3Cta = ()=>{
    return (
        <div>
            <div className="text-center flex justify-around items-center flex-col md:flex-row lg:flex:row gap-5
             bg-white py-8 px-2">
               
               {/* Col One */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Languages
                </p>
                <p className="text-black py-4 px-4">Javascript, Python,
                 HTML, CSS!</p>
                
                </div>

                 {/* Col Two */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Frameworks
                </p>
                <p className="text-black py-4 px-4">Django, React, Next JS, Node JS, MUI, TAILWIND!</p>
                
                </div>

                 {/* Col3 */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Cloud
                </p>
                <p className="text-black py-4 px-4">
                Git, Gitlab, AWS, GCP, Vercel.</p>
                
                </div>

                {/* Col4 */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Database
                </p>
                <p className="text-black py-4 px-4">
                Redis, postGreSQL, SQL, MongoDB/ATLAS, Pinecone, Chroma.</p>
                
                </div>

            </div>
        </div>
    )
}