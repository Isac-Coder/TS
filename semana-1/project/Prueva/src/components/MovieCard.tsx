import type { Movie } from "../data/movies.data";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="movie-card">
      <div className="movie-card__image-wrapper">
        <img
          className="movie-card__image"
          src={movie.imagen}
          alt={`Póster de la película ${movie.titulo}`}
        />

        <span className="movie-card__rating">
          ⭐ {movie.puntuacion}
        </span>
      </div>

      <div className="movie-card__content">
        <header className="movie-card__header">
          <h2 className="movie-card__title">
            {movie.titulo}
          </h2>

          <span className="movie-card__year">
            {movie.anio}
          </span>
        </header>

        <div className="movie-card__details">
          <p>
            <strong>Género:</strong> {movie.genero}
          </p>

          <p>
            <strong>Director:</strong> {movie.director}
          </p>

          <p>
            <strong>Duración:</strong> {movie.duracion} minutos
          </p>
        </div>

        <p className="movie-card__description">
          {movie.descripcion}
        </p>

        <button
          className="movie-card__button"
          type="button"
        >
          Ver detalles
        </button>
      </div>
    </article>
  );
}

export default MovieCard;