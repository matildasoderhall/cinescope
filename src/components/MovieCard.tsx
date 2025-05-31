import type { Movie } from "../models/movie"
import { Button } from "./Button";

type MovieProps = {
    movie: Movie;
    addToFavorites: (movie: Movie) => void;
}

export const MovieCard = ({movie, addToFavorites}: MovieProps) => {

    return <>
        <article className="p-4 bg-white rounded-2xl shadow-md overflow-hidden transition hover:scale-105 hover:shadow-lg duration-200 w-full -max-w-xs">
            <Button movie={movie} addToFavorites={addToFavorites} type="addMovie">Add</Button>
            <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover"/>
            <h3 className="text-xl font-semibold text-gray-800">{movie.title}</h3>
            <p className="text-gray-500">{movie.year}</p>
            <Button movie={movie} addToFavorites={addToFavorites} type="link">View Details</Button> 
        </article>
    </>
}