"use strict";
class Profesores extends Personas {
    // Constructor
    constructor(nombre, edad, sexo, newMateria) {
        super(nombre, edad, sexo);
        this.materia = newMateria;
        this.disponible = Math.random() > 0.2;
    }
    // Métodos
    get getMateria() {
        return this.materia;
    }
    get getDisponible() {
        return this.disponible;
    }
    comprobarDisponibilidad() {
        return this.disponible;
    }
}
