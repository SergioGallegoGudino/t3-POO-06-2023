"use strict";
// Creamos una clase Profesores que extienda de personas, asignando los atributos de la superclase además del atributo materia
class Profesores extends Personas {
    // Constructor
    constructor(nombre, edad, sexo, newMateria) {
        super(nombre, edad, sexo);
        this.materia = newMateria;
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
