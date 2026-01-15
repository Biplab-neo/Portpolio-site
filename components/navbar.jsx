

export function Navbar({ onnavclick }){

    

    return(
        <>
            <div className="w-[100vw] md:flex bg-[#111111] py-[5px] flex-wrap justify-around fixed inset-x-0 bottom-0 md:top-0 md:bottom-auto z-10">
                <div className="text-[#09e109] text-[30px] hidden md:block">{"{ BIPLAB }"}</div>
                <div className="flex justify-center gap-3.5 py-[8px] text-[#09e109] text-[20px]">
                    <div className="cursor-pointer" onClick={() => onnavclick("home")} >home</div>
                    <div className="cursor-pointer" onClick={() => onnavclick("about")} >About</div>
                    <div className="cursor-pointer" onClick={() => onnavclick("skills")}  >Skills</div>
                    <div className="cursor-pointer" onClick={() => onnavclick("projects")} >Projects</div>
                    <div className="cursor-pointer" onClick={() => onnavclick("contact")}>Contact</div>
                </div>
            </div>
        </>
    )
}