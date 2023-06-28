class Alumnos extends Personas{

    private calificacion:number;

    constructor(newNombre:string, newEdad:number, newSexo:tipSexo, newAsistencia:boolean, newCalificacion:number){
        super(newNombre, newEdad, newSexo, newAsistencia);
        this.calificacion = newCalificacion;
    }

}