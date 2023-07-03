"use strict";
class Profesores extends Personas {
    // Constructor
    constructor(nombre, edad, sexo, newMateria) {
        super(nombre, edad, sexo);
        this.materia = newMateria;
        this.disponible = true;
    }
    // Métodos
    get getMateria() {
        return this.materia;
    }
    get getDisponible() {
        return this.disponible;
    }
    //metodo para asignar disponibilidad
    pasarLista() {
        this.disponible = Math.random() > 0.2;
    }
}
