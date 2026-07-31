import { Link } from "react-router";
import type { IMovie } from "../interfaces/movies.interface";



interface IProps{
    movie: IMovie;
}


export const CustomCard = ({ movie }: IProps) => {

    return (
    <div className="w-full min-h-98 relative rounded-md flex flex-col overflow-hidden">
        <span className="absolute right-0 top-0 w-8 h-8 flex items-center justofy-center bg-amber-400">{ movie.puntuacion }</span>
        <div id="box_image" className="h-[60%]">
            <img src={ movie.imagen } alt={ movie.titulo } className="w-full h-full rounded-b-md"/>
        </div>
        <div id="description" className="flex-1">
            <span id="gender" className="my-2 w-fit p-2 text-white flex bg-slate-800 rounded-md">{ movie.genero }</span>
            <h2>{ movie.titulo }</h2>
            {/* <p id='description' className="line-clamp-2">{ movie.descripcion }</p>*/}
            <Link to={`/movies/${movie.id}`} className="w-full mt-2 bg-slate-900 text-white p-4 rounded-md">ver mas</Link>
        </div>
    </div>
    
  )
}
