"use strict";
// Creamos la clase Espectadores con su constructor y sus getters
class Espectadores {
    constructor(newNombre, newEdad, newDinero) {
        this.nombre = newNombre;
        this.edad = newEdad;
        this.dinero = newDinero;
    }
    get getEdad() {
        return this.edad;
    }
    get getDinero() {
        return this.dinero;
    }
    get getNombre() {
        return this.nombre;
    }
}
