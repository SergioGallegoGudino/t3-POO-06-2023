"use strict";
// Creamos la clase Alumnos que extiende de Personas, creando un constructor con los atributos de la superclase además de la calificacion del alumno
class Alumnos extends Personas {
    constructor(newNombre, newEdad, newSexo, newCalificacion) {
        super(newNombre, newEdad, newSexo);
        // Comprobaremos que la calificación del alumno sea válida
        this.calificacion = this.comprobarNota(newCalificacion);
    }
    // Creamos un metodo que compruebe si la calificacion asignada se encuentre entre 10 y 0, devolviendo 0 en caso negativo
    comprobarNota(calificacion) {
        if (calificacion > 10 || calificacion < 0) {
            return 0;
        }
        else {
            return calificacion;
        }
    }
    // Creamos los getters necesarios
    get getDisponible() {
        return this.disponible;
    }
    get getCalificacion() {
        return this.calificacion;
    }
    get getSexo() {
        return this.sexo;
    }
    //metodo para asignar disponibilidad
    pasarLista() {
        this.disponible = Math.random() > 0.5;
    }
}
