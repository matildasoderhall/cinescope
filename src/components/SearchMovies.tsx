import { MovieCard } from "./MovieCard"
import { Movie } from "../models/movie"

type SearchMoviesProps = {
    addToFavorites: (movie: Movie) => void;
}

export const SearchMovies = ({addToFavorites}: SearchMoviesProps) => {
    const movies = ([
        new Movie("Inception", 2010, "./inception_poster.jpeg" ),
        new Movie("The Matrix", 1999, "./the_matrix_poster.jpeg" ),
        new Movie("Interstellar", 2014, "./intersteller_poster.jpeg" ),
        new Movie("The Shawshank Redemption", 1994, "./the_shawshank_redemption_poster.jpeg" ),
    ])

    return <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {movies.map((m) => (<MovieCard addToFavorites={addToFavorites} key={m.id} movie={m}/>))}
        </div>
    </>
}