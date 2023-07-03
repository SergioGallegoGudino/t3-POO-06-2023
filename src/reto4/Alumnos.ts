class Alumnos extends Personas{

    private disponible: boolean;
    private calificacion:number;

    constructor(newNombre:string, newEdad:number, newSexo:tipSexo, newCalificacion:number){
        super(newNombre, newEdad, newSexo);
        this.disponible = true;
        this.calificacion = this.comprobarNota(newCalificacion);
    }

    comprobarNota(calificacion:number): number{
        if(calificacion > 10 || calificacion < 0){
            return 0;
        } else{
            return calificacion;
        }
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
    
    //metodo para asignar disponibilidad
    pasarLista() {
        this.disponible = Math.random() > 0.5;
    }
}