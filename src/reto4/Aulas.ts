
// Creamos una variable type para las materias
type materia = "matematicas" | "filosofia" | "fisica";

// Creamos la calse aulas con su constructor
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
        // Comprobamos que la cantidad de alumnos que hayan hecho novillos sea menor que la mitad de alumnos máximo, asignando el valor al atributo en caso negativo y devoliendo null en el positivo
        if(comprovarDisponibilidadClasse(alumnos, maxAlumnos)) 
            this.alumnos = alumnos;
        else 
            this.alumnos = null;
        // Comprobamos que el profesor se encuentre disponible e imparta la materia del aula, devolviendo el valor en caso positivo y null en caso negativo
        if(comprovarProfesor(profesor, materia))
            this.profesor = profesor;
        else 
            this.profesor = null;
        }
    // Creamos los getters necesarios
    get getProfesor(): Profesores | null{
        return this.profesor;
    }

    get getAlumnos(): Alumnos[] | null{
        return this.alumnos;
    }
    // Creamos un método que compruebe la cantidad de alumnos y alumnas aprovados, dividiendolos por sexo
    aprovados():void {
        let contM = 0;
        let contH = 0;
        if (this.alumnos == null || this.profesor == null){
            console.log(`Máximo de alumnos sobrepasado o profesor no coincide con la materia de la aula`);
        } else{
            for (let i = 0; i < this.alumnos.length; i++){
                if (this.alumnos[i].getSexo == 'H' && this.alumnos[i].getCalificacion >= 5){
                    contH++;
                }

                if (this.alumnos[i].getSexo == 'M' && this.alumnos[i].getCalificacion >= 5){
                    contM++;
                }
            }
        // Devolvemos por consola la cantidad separada por sexo
        console.log(`Alumnas aprovadas = ${contM}`);
        console.log(`Alumnos aprovados = ${contH}`);
        }
    }
    
}

const comprovarDisponibilidadClasse = (alumnos: Alumnos[], maxAlumnos: number): boolean => {
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

const comprovarProfesor = (profesor: Profesores, materia: materia): boolean => {
    if (profesor.getMateria === materia && profesor.getDisponible)
        return true;
    else
        return false
}


