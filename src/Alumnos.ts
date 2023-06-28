class Alumnos extends Personas{

    protected calificacion:number;

    constructor(newNombre:string, newEdad:number, newSexo:tipSexo, newCalificacion:number){
        super(newNombre, newEdad, newSexo);
        this.calificacion = newCalificacion;
    }
}