type Genero = 
"Drama"
| "Crimen"
| "Acción"
| "Ciencia ficción"
| "Suspenso"
| "Acción"
| "Animación"
| "Aventura"
| "Comedia dramática"
| string

type anio = string | number

interface IMovie{
    id: number;
    titulo: string;
    anio: anio;
    genero: Genero;
    director: string;
    duracion: number;
    puntuacion: number;
    imagen: string;
    descripcion?: string;
}

interface IProps{
    movie: IMovie;
}


export const CustomCard = ({ movie }: IProps) => {

    
  
    return (
    <div className="">
        <span>{movie.puntuacion}</span>
        <img src="" alt="" />
        <title></title>
        <p id='description'></p>
        <span id="gender"></span>
    </div>
    
  )
}
