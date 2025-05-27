import type { Movie } from "../models/movie"

type MovieProps = {
    movie: Movie;
}

export const MovieCard = ({movie}: MovieProps) => {

    return <>
        <article className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:scale-105 hover:shadow-lg duration-200 w-full -max-w-xs">
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
            <button>View Details</button>
        </article>
    </>
}