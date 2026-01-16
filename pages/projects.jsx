import { Cards } from "../components/cards"


export function Projects(){


    return (
        <>
            <h1 className="text-center py-[40px] bg-[black] text-[50px] text-[#09e109]" id="projects">PROJECTS.</h1>
            <div className="w-full px-[10px] flex justify-center md:justify-center overflow-x-scroll bg-[black] gap-10 py-[20px]">
                <a href="https://bipsweather.netlify.app">
                    <Cards image="/Screen Shot 2026-01-15 at 16.27.54.png" para="A weather app using html css and javascript"/>
                </a>
                <Cards image="/portpolio.png" para="A portpolio site using react and tailwind"/>
                <a href="https://bipsneoflix.netlify.app/">
                     <Cards image="/movieapp.png" para="A Movie app using TMDB API with react router, context api and tailwind with search feature and addwatchlist"/>
                </a>
            </div>
        </>
    )
}