"use strict";
// Creamos la calse aulas con su constructor
class Aulas {
    constructor(id, maxAlumnos, materia, alumnos, profesor) {
        // Creamos un método que comprueba que la cantidad de alumnos que ha hecho novillos no sea superior a la mitad del máximo de alumnos
        this.comprovarDisponibilidadClasse = (alumnos) => {
            let cont = 0;
            for (let i = 0; i < alumnos.length; i++) {
                if (!alumnos[i].getDisponible)
                    cont++;
            }
            if (cont > this.maxAlumnos / 2)
                return false;
            else
                return true;
        };
        // Creamos un método que comprueba que el profesor imparta la misma materia que el aula y que esté disponible
        this.comprovarProfesor = (profesor) => {
            if (profesor.getMateria === this.materia && profesor.getDisponible)
                return true;
            else
                return false;
        };
        this.id = id;
        this.maxAlumnos = maxAlumnos;
        this.materia = materia;
        // Comprobamos que la cantidad de alumnos que hayan hecho novillos sea menor que la mitad de alumnos máximo, asignando el valor al atributo en caso negativo y devoliendo null en el positivo
        // Como parámetro pasamos el array de objetos alumnos para luego asignarlo al atributo, que todavía no ha sido instanciado
        if (this.comprovarDisponibilidadClasse(alumnos))
            this.alumnos = alumnos;
        else
            this.alumnos = null;
        // Comprobamos que el profesor se encuentre disponible e imparta la materia del aula, devolviendo el valor en caso positivo y null en caso negativo
        // Como parámetro pasamos el objeto profesor para luego asignarlo al atributo, que todavía no ha sido instanciado
        if (this.comprovarProfesor(profesor))
            this.profesor = profesor;
        else
            this.profesor = null;
    }
    // Creamos los getters necesarios
    get getProfesor() {
        return this.profesor;
    }
    get getAlumnos() {
        return this.alumnos;
    }
    // Creamos un método que compruebe la cantidad de alumnos y alumnas aprovados, dividiendolos por sexo
    aprovados() {
        let contM = 0;
        let contH = 0;
        if (this.alumnos == null || this.profesor == null) {
            console.log(`Máximo de alumnos sobrepasado o profesor no coincide con la materia de la aula`);
        }
        else {
            for (let i = 0; i < this.alumnos.length; i++) {
                if (this.alumnos[i].getSexo == 'H' && this.alumnos[i].getCalificacion >= 5) {
                    contH++;
                }
                if (this.alumnos[i].getSexo == 'M' && this.alumnos[i].getCalificacion >= 5) {
                    contM++;
                }
            }
            // Devolvemos por consola la cantidad separada por sexo
            console.log(`Alumnas aprovadas = ${contM}`);
            console.log(`Alumnos aprovados = ${contH}`);
        }
    }
}
