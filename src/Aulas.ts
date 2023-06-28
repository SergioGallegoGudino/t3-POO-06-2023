type materia = "matematicas" | "fisolosfia" | "fisica";

class Aulas{
    private id: number;
    private maxAlumnos: number;
    private materia: materia;
    private alumnos: Alumnos[];
    private profesor: Profesores;

    constructor(id: number, maxAlumnos: number, materia: materia, alumnos: Alumnos[], profesor: Profesores){
        this.id = id;
        this.maxAlumnos = maxAlumnos;
        this.materia = materia;
        if(alumnos.length >= (maxAlumnos/2)){
            this.alumnos = alumnos;
        }
        if(profesor.getMateria == materia){
            this.profesor = profesor;
        }
    }
}


