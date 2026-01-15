import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa"

import { MdApi } from "react-icons/md"




export function Skills() {


    return (
        <>
                <h1 className="text-[#09e109] text-center bg-black py-[30px] text-[60px]" id="skills">Skills.</h1>
                <div className="w-[100vw] py-[10px] flex justify-center bg-black">
                    <ul className="w-[90%] md:w-[50%] text-[25px] md:text-[30px]">
                        <li className=" flex gap-[20px] justify-items-start py-[20px] bg-black text-center items-center text-white border-b border-[green]">
                            <FaHtml5 className="text-[red]" size={80} />
                            <p className="text-[#09e109]"> HTML</p>
                        </li>
                        <li className="flex gap-[20px] justify-items-start py-[20px] bg-black text-center items-center text-white border-b border-[green]">
                            <FaCss3Alt className="text-[#00a6ff]" size={80} />
                            <p className="text-[#09e109]">CSS</p>
                        </li>
                        <li className="flex gap-[20px] justify-items-start py-[20px] bg-black text-center items-center text-white border-b border-[green]">
                            <img
                                src="/public/pngaaa.com-6447779.png"
                                className="h-[50px] w-[80px]"
                            >
                            </img>
                            <p className="text-[#09e109]">TAILWIND</p>
                        </li>
                        <li className="flex gap-[20px] justify-items-start py-[20px] bg-black text-center items-center text-white border-b border-[green]">
                            <FaJs className="text-[yellow]" size={80} />
                            <p className="text-[#09e109]">JAVASCRIPT</p>
                        </li>
                        <li className="flex gap-[20px] justify-items-start py-[20px] bg-black text-center items-center text-white border-b border-[green]">
                            <FaReact className="text-[#006aff]" size={80} />
                            <p className="text-[#09e109]">REACT</p>
                        </li>
                        <li className="flex gap-[20px] justify-items-start py-[20px] bg-black text-center items-center text-white border-b border-[green]">
                            <MdApi className="text-[#09e109]" size={80} />
                            <p className="text-[#09e109]">API INTIGRATION</p>
                        </li>
                        <li className="flex gap-[20px] justify-items-start py-[20px] bg-black text-center items-center text-white border-b border-[green]">
                            <FaGitAlt className="text-[red]" size={80} />
                            <p className="text-[#09e109]">GIT</p>
                        </li>
                    </ul>
                </div>
        </>
    )
}