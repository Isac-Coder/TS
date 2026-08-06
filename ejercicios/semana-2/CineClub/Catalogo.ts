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
        console.log("");
        console.log("-------------------------------");
        console.log("");
        console.log(this.Título);
        console.log(`Director: ${this.Director}`);
        console.log(`Año: ${this.Anio}`);
        console.log(`Género: ${this.Genero}`);
        console.log(`⭐: ${this.Calificación}/10`);

        
        
    }

    esRecomendada() {
        if (this.Calificación >= 8) {
            console.log(`${this.Título} ⭐: ${this.Calificación}`);
        } else{
            return console.log(false);
            
        }
    }

    esLarga(){
        if (this.Duracion > 120){
            return console.log(true);
        } else{
            return console.log(false);
        }
    }

    actualizarCalificacion(calificionNueva: number){
        if (calificionNueva > 10){
            console.log("La calificación debe estar entre 0 y 10.");
        }else if(calificionNueva < 0){
            console.log("La calificación no debe ser menor a 0");
        }else{
            this.Calificación = calificionNueva
            console.log(`La calificacion de la pelicula ${this.Título} se actualizo a ${calificionNueva}`);
            
        }
    }

    buscarPelicula(titulo: string){
        if (this.Título == titulo){
            console.log("Película encontrada:");
            console.log(this.Título);
        }else if(titulo != this.Título){
            console.log("Película no encontrada");
            
        }
    }

    buscarPorGenero(genero: string){
        if (this.Genero == genero){
            console.log(this.Título);
        }else{
            console.log(`No se encontro el genero: ${genero}`);
            
        }
    }

}

class ContenidoAudiovisual {
            
            titulo: string ;
            anio: number ;
            duracion: number ;
            calificacion: number ;

            constructor(titulo: string, anio: number, duracion: number, calificacion: number) {
                this.titulo = titulo
                this.anio = anio
                this.duracion = duracion
                this.calificacion = calificacion
            }
        }

const pelicula1 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",9);

const pelicula2 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",6);

const pelicula3 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",5);

const pelicula4 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",8);

const pelicula5 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",3);

const pelicula6 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",7);

const pelicula7 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",5);

const pelicula8 = new Pelicula("Interstellar","2014","Ciencia ficción",169,"Christopher Nolan",2);

const peliculas: Pelicula[] = [pelicula1,pelicula2,pelicula3,pelicula4,pelicula5,pelicula6,pelicula7,pelicula8]

peliculas.map( (item) => {
    item.mostrarInformacion()
    console.log("-------------------------------");
    item.esRecomendada()
    console.log("-------------------------------");
    item.buscarPelicula("Inter")
    console.log("-------------------------------");
    item.buscarPorGenero("Ciencia")
}
)

// pelicula5.mostrarInformacion()

// pelicula5.esRecomendada()

// pelicula5.esLarga()

// pelicula5.actualizarCalificacion(7)