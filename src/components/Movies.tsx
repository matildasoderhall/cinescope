import { useState } from "react"
import { MovieCard } from "./MovieCard"
import { Movie } from "../models/movie"



export const Movies = () => {
    const [movies, setMovie] = useState<Movie[]>([
        new Movie("Inception", 2010, "" ),
        new Movie("The Matrix", 1999, "" ),
        new Movie("Interstellar", 2014, "" ),
        new Movie("The Shawshank Redemption", 1994, "" ),
    ])
    return <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {movies.map((m) => (<MovieCard movie={m}/>))}
        </div>
    
    </>
}