class Alumnos extends Personas{

    private calificacion:number;

    constructor(newNombre:string, newEdad:number, newSexo:tipSexo, newCalificacion:number, ){
        super(newNombre, newEdad, newSexo);
        this.calificacion = this.comprobarNota(newCalificacion);
    }

    comprobarNota(calificacion:number): number{
        if(calificacion > 10 || calificacion < 0){
            return 0;
        } else{
            return calificacion;
        }
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

    get getSexo(): tipSexo {
        return this.sexo;
    }

}