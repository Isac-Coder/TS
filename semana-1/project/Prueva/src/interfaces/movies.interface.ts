export type Genero = 
| "Drama"
| "Crimen"
| "Acción"
| "Ciencia ficción"
| "Suspenso"
| "Acción"
| "Animación"
| "Aventura"
| "Comedia dramática"
| string

export type anio = string | number

export interface IMovie{
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

export interface IProps{
    movie: IMovie;
}