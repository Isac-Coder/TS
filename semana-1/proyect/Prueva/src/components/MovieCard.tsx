import { type Movie } from "../data/movies";

function MovieCard({ id, titulo, anio, genero, director, duracion,puntuacion,imagen, descripcion }: Movie) {
  return (
    <article className="">
      <div className="">
        <p>{id}</p>
        <p>{titulo}</p>
        <p>{anio}</p>
        <p>{genero}</p>
        <p>{director}</p>
        <p>{duracion}</p>
        <p>{puntuacion}</p>
        <p>{imagen}</p>
        <p>{descripcion}</p>
       
      </div>
    </article>
  );
}

export default MovieCard;