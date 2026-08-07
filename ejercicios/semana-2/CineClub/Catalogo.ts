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

    mostrarInformacion() {
        super.mostrarInformacion()
        console.log(`Tema ${this.tema}`);
        console.log(`Narrador ${this.narrador}`);
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
        super.mostrarInformacion()
        console.log(`Género: ${this.genero}`);
        console.log(`Director: ${this.director}`);
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

class catalogo{
    contenidos: ContenidoAudiovisual[];

    constructor(){
        this.contenidos = [];
    }

    agregar(contenido: ContenidoAudiovisual){
        this.contenidos.push(contenido);
    }

    eliminar(titulo: string){
        const indice = this.contenidos.findIndex(c => c.titulo === titulo)

        if (indice === -1){
            console.log(`No se encontro "${titulo}" en el catalogo`);
            return;
        }

        this.contenidos.splice(indice, 1)
        console.log(`${titulo} fue eliminado correctamente`);
    }

    buscarPorTitulo(titulo: string): ContenidoAudiovisual | undefined{
        return this.contenidos.find(c => c.titulo.toLowerCase() === titulo.toLowerCase())
    }

    mostrarTodos(){
        console.log("");
        console.log("=== CATALOGO ===");
        this.contenidos.forEach(contenido => {
            contenido.mostrarInformacion
        })
    }

    mostrarRecomendados(calificacionMinima: number = 8){
        console.log("");
        console.log("=== RECOMENDADOS ===");
        
        const recomendados = this.contenidos.filter(c => c.calificacion >= calificacionMinima)

        if (recomendados.length === 0){
            console.log("No hay recomendados");
            return
        }

        recomendados.forEach(contenido =>{
            contenido.mostrarInformacion();
        })
    }

    
}



const pelicula1 = new Pelicula("Interstellar",2014,"Ciencia ficción",169,"Christopher Nolan",9);

const catalogo1 = new catalogo();


catalogo1.agregar(pelicula1);

catalogo1.buscarPorTitulo("Interstellar")

catalogo1.mostrarTodos();

catalogo1.mostrarRecomendados();

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
});



// pelicula5.mostrarInformacion()

// pelicula5.esRecomendada()

// pelicula5.esLarga()

// pelicula5.actualizarcalificacion(7)