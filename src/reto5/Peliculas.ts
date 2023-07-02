class Peliculas{
    private titulo:string;
    private duracion:number;
    private edadMinima:number;
    private director:string;

    constructor(newTitulo:string, newDuracion:number, newEdadMinima:number, newDirector:string){
        this.titulo = newTitulo;
        this.duracion = newDuracion;
        this.edadMinima = newEdadMinima;
        this.director = newDirector;
    }

}