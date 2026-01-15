

export function Cards( {para , image} ){

    return(
        <>
                <div 
                className="overflow-y-scroll border-[2px] border-[#0af00a] w-[350px] h-[300px] flex-shrink-0 bg-cover bg-center text-[30px] rounded-2xl text-center content-end md:hover:scale-[1.1] transition-all- duration-200 ease-in-out"
                >    
                 <img
                 src={`${image}`}
                 className="py-[5px] h-[70%] w-[100%] object-cover"
                 >
                 </img>
                 <p className=" text-[#0af00a] text-[19px] text-center py-[5px]">{para}</p>   
                </div>
        </>
    )
}

