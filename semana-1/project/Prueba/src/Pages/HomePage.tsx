import { CustomCard } from "../components/CustomCard"
import { movies } from "../data/movies.data"

export const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido Al Riwi Movie</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {
          movies.map((movie)=>(
            <CustomCard key={movie.id+movie.titulo} movie={movie}/>
          ))
        }
      </div>
    </div>
  )
}
