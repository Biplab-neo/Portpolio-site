import { Typewriter } from "react-simple-typewriter"

import { FaHtml5 , FaCss3Alt , FaJs , FaReact } from "react-icons/fa"



export function Home() {


    return (
        <>
            <div id="home" className="w-[100vw] py-[50px] md:py-[150px] relative flex justify-center gap-[50px] md:gap-[80px] flex-wrap bg-[url('/2440x1440-programming-background-2440-x-1440-a7gvtxxz8a12on0j.jpg')] bg-cover bg-center">
                <div className=" absolute inset-0 bg-black/80"></div>
                <div className="flex justify-center items-center relative z-20">
                    <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-[url('/penguine.png')] bg-cover bg-center] border-[5px] border-[#09e109]"></div>
                </div>
                <div className="w-[100vw] w-[100vw] md:w-[355px] text-center content-start md:content-center relative">
                    <h1 className="text-[#09e109] text-[45px] py-[5px]">Hi..I'M BIPLAB</h1>
                    <h1 className="text-[#09e109] h-[120px] md:h-[190px] text-[35px] md:text-[45px] py-[5px]">
                        I AM A {""}
                        <Typewriter
                            words={["FRONTEND DEVLOPER","TECH ENTHUSIAST","LEARNER"]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={90}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                    <ul className=" flex text-center justify-center gap-5 py-[10px] md:mt-[18px] text-[#09e109]">
                        <li><FaHtml5 className="hover:scale-[1.2]" size={60}/></li>
                        <li><FaCss3Alt className="hover:scale-[1.2]" size={60}/></li>
                        <li><FaJs className="hover:scale-[1.2]" size={60}/></li>
                        <li><FaReact className="hover:scale-[1.2]" size={60}/></li>
                    </ul>
                </div>
            </div>
        </>
    )
}






























