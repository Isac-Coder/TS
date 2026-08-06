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

                mostrarInformacion(){
        console.log("");
        console.log("-------------------------------");
        console.log("");
        console.log(this.titulo);
        console.log(`Año: ${this.anio}`);
        console.log(`⭐: ${this.calificacion}/10`);
    }
}

class Documental extends ContenidoAudiovisual {

    tema: string;
    narrador: string;

    constructor(titulo: string, anio: number, duracion: number, calificion: number,tema: string, narrador: string){
        super(titulo,anio,duracion,calificion)
        this.tema = tema;
        this.narrador = narrador
    }
}

class Pelicula extends ContenidoAudiovisual{

        genero: string ;
        director: string ;

    constructor(titulo: string, anio: number, genero: string, duracion: number, director: string, calificion: number) {
        super(titulo,anio,duracion,calificion)

        this.genero = genero ;
        this.director = director ;

    
    }

    mostrarInformacion(){
        console.log("");
        console.log("-------------------------------");
        console.log("");
        console.log(this.titulo);
        console.log(`director: ${this.director}`);
        console.log(`Año: ${this.anio}`);
        console.log(`Género: ${this.genero}`);
        console.log(`⭐: ${this.calificacion}/10`);
    }

    esRecomendada() {
        if (this.calificacion >= 8) {
            console.log(`${this.titulo} ⭐: ${this.calificacion}`);
        } else{
            return console.log(false);
            
        }
    }

    esLarga(){
        if (this.duracion > 120){
            return console.log(true);
        } else{
            return console.log(false);
        }
    }

    actualizarcalificacion(calificionNueva: number){
        if (calificionNueva > 10){
            console.log("La calificacion debe estar entre 0 y 10.");
        }else if(calificionNueva < 0){
            console.log("La calificacion no debe ser menor a 0");
        }else{
            this.calificacion = calificionNueva
            console.log(`La calificacion de la pelicula ${this.titulo} se actualizo a ${calificionNueva}`);
            
        }
    }

    buscarPelicula(titulo: string){
        if (this.titulo == titulo){
            console.log("Película encontrada:");
            console.log(this.titulo);
        }else if(titulo != this.titulo){
            console.log("Película no encontrada");
            
        }
    }

    buscarPorgenero(genero: string){
        if (this.genero == genero){
            console.log(this.titulo);
        }else{
            console.log(`No se encontro el genero: ${genero}`);
            
        }
    }

}


const pelicula1 = new Pelicula("Interstellar",2014,"Ciencia ficción",169,"Christopher Nolan",9);

const pelicula2 = new Pelicula("Interstellar",2014,"Ciencia ficción",169,"Christopher Nolan",6);

const pelicula3 = new Pelicula("Interstellar",2014,"Ciencia ficción",169,"Christopher Nolan",5);

const pelicula4 = new Pelicula("Interstellar",2014,"Ciencia ficción",169,"Christopher Nolan",8);

const pelicula5 = new Pelicula("Interstellar",2014,"Ciencia ficción",169,"Christopher Nolan",3);

const pelicula6 = new Pelicula("Interstellar",2014,"Ciencia ficción",169,"Christopher Nolan",7);

const pelicula7 = new Pelicula("Interstellar",2014,"Ciencia ficción",169,"Christopher Nolan",5);

const pelicula8 = new Pelicula("Interstellar",2014,"Ciencia ficción",169,"Christopher Nolan",2);

const peliculas: Pelicula[] = [pelicula1,pelicula2,pelicula3,pelicula4,pelicula5,pelicula6,pelicula7,pelicula8]

peliculas.map( (item) => {
    item.mostrarInformacion()
    console.log("-------------------------------");
    item.esRecomendada()
    console.log("-------------------------------");
    item.buscarPelicula("Inter")
    console.log("-------------------------------");
    item.buscarPorgenero("Ciencia")
}
)

// pelicula5.mostrarInformacion()

// pelicula5.esRecomendada()

// pelicula5.esLarga()

// pelicula5.actualizarcalificacion(7)