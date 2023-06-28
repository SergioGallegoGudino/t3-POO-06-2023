class Alumnos extends Personas{

    private calificacion:number;

    constructor(newNombre:string, newEdad:number, newSexo:tipSexo, newCalificacion:number, ){
        super(newNombre, newEdad, newSexo);
        this.calificacion = newCalificacion;
    }

    comprobarDisponibilidad(): void{
        this.disponible = 
    }
    
    get disponibildiad(): boolean {
        return this.disponible;
    }
    
    get nota(): number {
        return this.calificacion;
    }

}