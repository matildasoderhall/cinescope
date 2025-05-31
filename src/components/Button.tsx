import type React from "react"
import type { Movie } from "../models/movie";

type ButtonProps = {
    children: React.ReactNode;
    type: string;
    movie: Movie;
    addToFavorites: (movie: Movie) => void;
}


export const Button = ({children, type, movie, addToFavorites}: ButtonProps) => {

    const handleClick = () => {
        if (type === "addMovie") {
            addToFavorites(movie);
        }
    }
    return <>
        <button 
        onClick={handleClick}
        className="mt-3 p-4 py-2 bg-blue-500 text-white text-sm rounded-xl hover:bg-blue-600 transition">
            {children}
        </button>
    </>
}