class Pelicula {
        Título: string;
        Anio: string ;
        Genero: string ;
        Duracion: number ;
        Director: string ;
        Calificación: number ;

    constructor(Titulo: string, Anio: string, Genero: string, Duracion: number, Director: string, Calificion: number) {
        this.Título = Titulo
        this.Anio = Anio
        this.Genero = Genero
        this.Duracion = Duracion
        this.Director = Director
        this.Calificación = Calificion
    }

    mostrarInformacion(){
        console.log(this.Título);
        console.log(`Director: ${this.Director}`);
        console.log(`Año: ${this.Anio}`);
        console.log(`Género: ${this.Genero}`);
        console.log(`⭐: ${this.Calificación}/10`);
    }

    esRecomendada(Calificion: number) {
        Calificion = 8
}
}

const pelicula1 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",9);

const pelicula2 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",9);

const pelicula3 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",9);

const pelicula4 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",9);

const pelicula5 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",9);

const pelicula6 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",9);

const pelicula7 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",9);

