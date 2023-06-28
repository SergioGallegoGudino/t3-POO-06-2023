class Alumnos extends Personas{

    private calificacion:number;

    constructor(newNombre:string, newEdad:number, newSexo:tipSexo, newCalificacion:number, ){
        super(newNombre, newEdad, newSexo);
        this.calificacion = newCalificacion;
    }

    comprobarDisponibilidad(): void{
        this.disponible = Math.random() > 0.5;
    }
    
    get getDisponible(): boolean {
        return this.disponible;
    }
    
    get getCalificacion(): number {
        return this.calificacion;
    }

}