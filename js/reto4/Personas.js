"use strict";
// Creamos la clase padre Personas con sus atributos
class Personas {
    //constructor
    constructor(newNombre, newEdad, newSexo) {
        this.nombre = newNombre;
        this.edad = newEdad;
        this.sexo = newSexo;
        // Por defecto, todas las personas estarán disponibles
        this.disponible = true;
    }
}
