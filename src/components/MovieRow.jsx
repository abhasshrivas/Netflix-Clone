import { useRef, useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { useNavigate } from "react-router-dom";

const TMDB_API_KEY = "8265bd1679663a7ea12ac168da84d2e8";
const IMG_BASE = "https://image.tmdb.org/t/p/w300";
const IMG_ORIGINAL = "https://image.tmdb.org/t/p/original";

function MovieRow({ title, fetchUrl }) {
    const rowRef = useRef(null);
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const url =
            fetchUrl ||
            `https://api.themoviedb.org/3/trending/all/week?api_key=${TMDB_API_KEY}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [fetchUrl]);

    const scroll = (direction) => {
        if (rowRef.current) {
            const scrollAmount = isMobile ? 300 : 700;
            rowRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="px-4 sm:px-8 lg:px-12 py-6 sm:py-8 bg-black relative group">
            <h2 className="text-white text-lg sm:text-2xl mb-4 sm:mb-6 font-medium">
                {title || t.trendingNow}
            </h2>

            {/* Left Arrow */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 text-white text-2xl sm:text-3xl px-2 sm:px-3 py-4 sm:py-6 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-500"
            >
                ‹
            </button>

            {/* Loading skeleton */}
            {loading ? (
                <div className="flex gap-2 sm:gap-4 overflow-x-auto">
                    {Array.from({ length: isMobile ? 3 : 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="min-w-[120px] sm:min-w-[150px] lg:min-w-[200px] h-40 sm:h-48 lg:h-64 bg-zinc-800 rounded-lg animate-pulse"
                        />
                    ))}
                </div>
            ) : (
                <div
                    ref={rowRef}
                    className="flex gap-2 sm:gap-4 lg:gap-6 overflow-x-auto scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {movies.map((movie, index) => (
                        <div
                            key={movie.id}
                            onClick={() => setSelectedMovie(movie)}
                            className="min-w-[120px] sm:min-w-[150px] lg:min-w-[200px] rounded-lg hover:scale-105 transition duration-300 cursor-pointer relative"
                        >
                            {/* Real TMDB Poster */}
                            <img
                                src={
                                    movie.poster_path
                                        ? `${IMG_BASE}${movie.poster_path}`
                                        : `https://picsum.photos/300/400?random=${index}`
                                }
                                alt={movie.title || movie.name}
                                className="w-full h-40 sm:h-48 lg:h-64 object-cover rounded-lg"
                            />

                            {/* Rank number */}
                            <div className="relative">
                                <span
                                    className="absolute -top-16 sm:-top-24 lg:-top-30 left-2 sm:left-4 text-4xl sm:text-6xl lg:text-8xl font-black text-black/90"
                                    style={{ WebkitTextStroke: "2px #FFFFFF" }}
                                >
                                    {index + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Right Arrow */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 text-white text-2xl sm:text-3xl px-2 sm:px-3 py-4 sm:py-6 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-500"
            >
                ›
            </button>

            {/* Modal */}
            {selectedMovie && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3 sm:p-4"
                    onClick={() => setSelectedMovie(null)}
                >
                    <div
                        className="bg-zinc-900 rounded-xl overflow-hidden max-w-2xl w-full relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            onClick={() => setSelectedMovie(null)}
                            className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-black/70 text-white rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-lg hover:bg-black transition"
                        >
                            ✕
                        </button>

                        {/* Backdrop image */}
                        <div className="relative h-40 sm:h-56 lg:h-72">
                            <img
                                src={
                                    selectedMovie.backdrop_path
                                        ? `${IMG_ORIGINAL}${selectedMovie.backdrop_path}`
                                        : selectedMovie.poster_path
                                          ? `${IMG_ORIGINAL}${selectedMovie.poster_path}`
                                          : `https://picsum.photos/800/400?random=${selectedMovie.id}`
                                }
                                alt={selectedMovie.title || selectedMovie.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 from-zinc-900 via-transparent to-transparent" />
                            <h2 className="absolute bottom-2 sm:bottom-4 left-3 sm:left-6 text-white text-lg sm:text-2xl lg:text-3xl font-bold drop-shadow">
                                {selectedMovie.title || selectedMovie.name}
                            </h2>
                        </div>

                        {/* Details */}
                        <div className="p-3 sm:p-6">
                            {/* Meta */}
                            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm flex-wrap">
                                <span className="text-gray-400">
                                    {(
                                        selectedMovie.release_date ||
                                        selectedMovie.first_air_date
                                    )?.slice(0, 4)}
                                </span>
                                <span className="border border-gray-500 text-gray-400 px-1 text-xs">
                                    HD
                                </span>
                                <span className="border border-gray-500 text-gray-400 px-1 text-xs">
                                    Action
                                </span>
                                <span className="border border-gray-500 text-gray-400 px-1 text-xs">
                                    Drama
                                </span>
                            </div>

                            {/* Overview */}
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                                {selectedMovie.overview ||
                                    "No description available."}
                            </p>

                            {/* Buttons */}
                            <button
                                onClick={() => navigate("/LinkEmail")}
                                className="w-full py-2 sm:py-3 px-4 bg-red-600 text-white font-bold rounded text-sm sm:text-lg hover:bg-red-700 transition flex items-center justify-center gap-2"
                            >
                                Get Started ❯
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MovieRow;
