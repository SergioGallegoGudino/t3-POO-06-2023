"use strict";
class Aulas {
    constructor(id, maxAlumnos, materia, alumnos, profesor) {
        this.id = id;
        this.maxAlumnos = maxAlumnos;
        this.materia = materia;
        if (comprovarDisponibilidadClasse(alumnos, maxAlumnos))
            this.alumnos = alumnos;
        else
            this.alumnos = null;
        if (comprovarProfesor(profesor, materia))
            this.profesor = profesor;
        else
            this.profesor = null;
    }
    get getProfesor() {
        return this.profesor;
    }
    get getAlumnos() {
        return this.alumnos;
    }
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
            console.log(`Alumnas aprovadas = ${contM}`);
            console.log(`Alumnos aprovados = ${contH}`);
        }
    }
}
const comprovarDisponibilidadClasse = (alumnos, maxAlumnos) => {
    let cont = 0;
    for (let i = 0; i < alumnos.length; i++) {
        if (!alumnos[i].getDisponible)
            cont++;
    }
    if (cont > maxAlumnos / 2)
        return false;
    else
        return true;
};
const comprovarProfesor = (profesor, materia) => {
    if (profesor.getMateria === materia && profesor.getDisponible)
        return true;
    else
        return false;
};
