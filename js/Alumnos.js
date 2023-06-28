"use strict";
class Alumnos extends Personas {
    constructor(newNombre, newEdad, newSexo, newCalificacion) {
        super(newNombre, newEdad, newSexo);
        this.disponible = Math.random() > 0.5;
        this.calificacion = this.comprobarNota(newCalificacion);
    }
    comprobarNota(calificacion) {
        if (calificacion > 10 || calificacion < 0) {
            return 0;
        }
        else {
            return calificacion;
        }
    }
    get getDisponible() {
        return this.disponible;
    }
    get getCalificacion() {
        return this.calificacion;
    }
    get getSexo() {
        return this.sexo;
    }
}
