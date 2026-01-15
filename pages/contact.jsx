import { FaGithub } from "react-icons/fa"
import { FiMail, FiLinkedin , FiGithub , FiFacebook } from "react-icons/fi"



export function Contact() {


    return (
        <>
            <div className="pt-[20px] pb-[70px] bg-[black] text-center">
                <h1 className="text-[#09e109] py-[40px] text-[50px]" id="contact">CONTACT.</h1>
                <div className="flex flex-wrap justify-center gap-[20px] py-[20px]">
                    <a
                        href="https://www.10.29.bips@gmail.com"
                        className="flex justify-center items-center text-[20px] gap-[20px] bg-[#09e109] text-black w-[300px] h-[50px] px-[5px] rounded-lg overflow-hidden hover:bg-blue-600 transition">
                        <FiMail size={40} />
                        <p>gmail</p>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/biplab-biswas-4b5a20344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="flex justify-center items-center text-[20px] gap-[20px] bg-[#09e109] text-black w-[300px] h-[50px] px-[5px] rounded-lg overflow-hidden hover:bg-blue-600 transition">
                        <FiLinkedin size={35} />
                        <p>Linkedin</p>
                    </a>
                </div>
                <div className="flex flex-wrap justify-center gap-[20px]">
                    <a
                        href="https://github.com/Biplab-neo"
                        className="flex justify-center items-center text-[20px] gap-[20px] bg-[#09e109] text-black w-[300px] h-[50px] px-[5px] rounded-lg overflow-hidden hover:bg-blue-600 transition">
                        <FaGithub size={40} />
                        <p>Github</p>
                    </a>
                    <a
                        href=""
                        className="flex justify-center items-center text-[20px] gap-[20px] bg-[#09e109] text-black w-[300px] h-[50px] px-[5px] rounded-lg overflow-hidden hover:bg-blue-600 transition">
                        <FiFacebook size={40} />
                        <p>Facebook</p>
                    </a>
                </div>

            </div>
        </>
    )
}