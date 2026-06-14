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
            rowRef.current.scrollBy({
                left: direction === "left" ? -700 : 700,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="px-42 py-8 bg-black relative group">
            <h2 className="text-white text-2xl mb-6 font-medium">
                {title || t.trendingNow}
            </h2>

            {/* Left Arrow */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white text-3xl px-3 py-6 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-500"
            >
                ‹
            </button>

            {/* Loading skeleton */}
            {loading ? (
                <div className="flex gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className=" h-64 bg-zinc-800 rounded-lg animate-pulse "
                        />
                    ))}
                </div>
            ) : (
                <div
                    ref={rowRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {movies.map((movie, index) => (
                        <div
                            key={movie.id}
                            onClick={() => setSelectedMovie(movie)}
                            className="min-w-[200px]  rounded-lg hover:scale-105 transition duration-300 cursor-pointer relative"
                        >
                            {/* Real TMDB Poster */}
                            <img
                                src={
                                    movie.poster_path
                                        ? `${IMG_BASE}${movie.poster_path}`
                                        : `https://picsum.photos/300/400?random=${index}`
                                }
                                alt={movie.title || movie.name}
                                className="w-45 h-64 object-cover rounded-lg "
                            />

                            {/* Rank number */}
                            <div className="relative">
                                <span
                                    className="absolute -top-30 left-4  text-8xl font-black text-black/90 "
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
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white text-3xl px-3 py-6 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-500"
            >
                ›
            </button>

            {/* Modal */}
            {selectedMovie && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedMovie(null)}
                >
                    <div
                        className="bg-zinc-900 rounded-xl overflow-hidden max-w-2xl w-full relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            onClick={() => setSelectedMovie(null)}
                            className="absolute top-3 right-3 z-10 bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center text-xl hover:bg-black transition"
                        >
                            ✕
                        </button>

                        {/* Backdrop image */}
                        <div className="relative h-72">
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
                            <div className="absolute inset-0  from-zinc-900 via-transparent to-transparent" />
                            <h2 className="absolute bottom-4 left-6 text-white text-3xl font-bold drop-shadow">
                                {selectedMovie.title || selectedMovie.name}
                            </h2>
                        </div>

                        {/* Details */}
                        <div className="p-6">
                            {/* Meta */}
                            <div className="flex items-center gap-4 mb-4 text-sm flex-wrap">
                                {/*} <span className="text-green-400 font-semibold">
                                    {Math.round(
                                        selectedMovie.vote_average * 10,
                                    )}
                                    % Match
                                </span>}*/}
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
                            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                {selectedMovie.overview ||
                                    "No description available."}
                            </p>

                            {/* Buttons }
                            <div className="flex gap-3">
                                <button
                                    onClick={() => navigate("/login")}
                                    className="flex-1 py-3 bg-white text-black font-bold rounded text-lg hover:bg-gray-200 transition flex items-center justify-center gap-2"
                                >
                                    ▶ Play
                                </button>*/}
                            <button
                                onClick={() => navigate("/LinkEmail")}
                                className="flex-1 py-3 px-6 bg-red-600 text-white font-bold rounded text-lg hover:bg-red-700 transition flex items-center justify-center gap-2"
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
