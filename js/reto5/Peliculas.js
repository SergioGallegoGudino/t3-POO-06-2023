"use strict";
class Peliculas {
    constructor(newTitulo, newDuracion, newEdadMinima, newDirector) {
        this.titulo = newTitulo;
        this.duracion = newDuracion;
        this.edadMinima = newEdadMinima;
        this.director = newDirector;
    }
    get getTitulo() {
        return this.titulo;
    }
    get getEdadMinima() {
        return this.edadMinima;
    }
}
