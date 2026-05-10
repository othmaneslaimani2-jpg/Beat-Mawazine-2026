import Data from "../Data/ArtistsData"
import { Link } from "react-router-dom";

export const Program = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center z-40 pb-20">
            
            <div className="w-full max-w-[1300px] flex flex-col justify-start px-8 pt-15 pb-12">
                <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#ac0808] to-[#d60020] tracking-tight leading-tight mb-6">
                    THE MAWAZINE 2026 <br className="hidden md:block"/> BEAT PROGRAM
                </h1>
                <h3 className="font-medium text-gray-300 text-lg md:text-2xl max-w-4xl leading-relaxed">
                    Festival returns for its 21st edition in 2026, transforming Rabat and Salé into a global stage for nine days. With over 90 acts across 7 major stages, it remains the largest music festival in the world by attendance.
                </h3>
            </div>

            
            <div className="w-full max-w-[1300px] px-8 flex flex-nowrap overflow-x-auto pb-8 justify-start gap-1 items-stretch snap-x">
                {Data.map((artist) => (
                    <div key={artist.id} className="w-60 shrink-0 snap-start flex flex-col p-2 bg-white rounded-xl transform transition-all hover:-translate-y-1 duration-300 shadow-lg hover:shadow-2xl">
                        <img className="h-56 w-full object-cover object-top rounded-xl" src={artist.image as string} alt={artist.name} />
                        <div className="p-2 flex flex-col grow">
                            <h3 className="w-fit mb-2 rounded-3xl px-3 py-1 bg-gray-600 text-white text-xs font-bold uppercase tracking-wide">{artist.Category}</h3>
                            <h2 className="font-bold text-2xl mb-1 truncate">{artist.name}</h2>
                            <p className="text-sm font-semibold text-gray-600 line-clamp-3">{artist.description}</p>
                        </div>
                        <div className="m-2 mt-auto">
                            <Link to={`/artist/${artist.id}`} className="block w-full text-center text-white font-semibold cursor-pointer bg-red-600 py-2 px-3 rounded-3xl hover:bg-red-700">Learn More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}