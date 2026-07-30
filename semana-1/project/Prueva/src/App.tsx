import { movies } from "./data/movies";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Catálogo de Películas</h1>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;