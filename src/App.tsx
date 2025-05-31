import { useState } from 'react'
import './App.css'
import { FavoritesList } from './components/FavoritesList'
import { SearchMovies } from './components/SearchMovies'
import type { Movie } from './models/movie'


function App() {
  const [favorites, setFavorites] = useState<Movie[]>([])

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) =>
      prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
    )
  }

  return (
    <>
      <SearchMovies addToFavorites={addToFavorites}/>
      <FavoritesList favorites={favorites}/>
    </>
  )
}

export default App
