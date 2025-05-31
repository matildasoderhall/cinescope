import { Movie } from "../models/movie";

type FavoritesListProps = {
    favorites: Movie[];
}

export const FavoritesList = ({favorites}: FavoritesListProps) => {
   

    return <>
        <div>
            <h2>Favorites</h2>
            {favorites.length === 0 && <p>No favorites yet</p>}
            {favorites.map((m) => (
                <div key={m.id}>
                    <p>{m.title} ({m.year})</p>
                </div>
            ))}
            <div>
                {}
            </div>
        </div>
    </>
}