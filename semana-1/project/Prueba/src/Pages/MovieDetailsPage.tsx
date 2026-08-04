import { useLocation } from "react-router"
import { movies } from "../data/movies.data"


export const MovieDetailsPage = () => {
  const location = useLocation()
  const idMovie = location.pathname.split("/")[2]
  const currentMovie = movies[+idMovie-1]


  return (
    <div>
      <span>
        <img src={currentMovie.imagen} alt="" />
        <p>{ currentMovie.titulo }</p>
      </span>
    </div>
  )
}
