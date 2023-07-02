type materia = "matematicas" | "filosofia" | "fisica";

class Aulas{
    private id: number;
    private maxAlumnos: number;
    private materia: materia;
    private alumnos: Alumnos[] | null;
    private profesor: Profesores | null;

    constructor(id: number, maxAlumnos: number, materia: materia, alumnos: Alumnos[], profesor: Profesores){
        this.id = id;
        this.maxAlumnos = maxAlumnos;
        this.materia = materia;

        if(comprovarDisponibilidadClasse(alumnos, maxAlumnos)) 
            this.alumnos = alumnos;
        else 
            this.alumnos = null;
        
        if(comprovarProfesor(profesor, materia))
            this.profesor = profesor;
        else 
            this.profesor = null;
        }

    get getProfesor(): Profesores | null{
        return this.profesor;
    }

    get getAlumnos(): Alumnos[] | null{
        return this.alumnos;
    }

    aprovados(){
        let contM = 0;
        let contH = 0;
        if (this.alumnos == null || this.profesor == null){
            return null;
        } else{
            for (let i = 0; i < this.alumnos.length; i++){
                if (this.alumnos[i].getSexo == 'H' && this.alumnos[i].getCalificacion >= 5){
                    contH++;
                }

                if (this.alumnos[i].getSexo == 'M' && this.alumnos[i].getCalificacion >= 5){
                    contM++;
                }
            }
        console.log(`Alumnas aprovadas = ${contM}`);
        console.log(`Alumnos aprovados = ${contH}`);
        }
    }
    
}

const comprovarDisponibilidadClasse = (alumnos: Alumnos[], maxAlumnos: number) => {
    let cont = 0;
    for (let i = 0; i < alumnos.length; i++){
        if (!alumnos[i].getDisponible)
            cont++;
    }

    if (cont > maxAlumnos/2)
        return false;
    else
        return true;
}

const comprovarProfesor = (profesor: Profesores, materia: materia) => {
    if (profesor.getMateria === materia && profesor.getDisponible)
        return true;
    else
        return false
}


