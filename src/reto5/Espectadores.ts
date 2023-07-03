class Espectadores{
    private nombre:string;
    private edad:number;
    private dinero:number;

    constructor(newNombre:string, newEdad:number, newDinero:number){
        this.nombre = newNombre;
        this.edad = newEdad;
        this.dinero = newDinero;
    }

    get getEdad(){
        return this.edad;
    }

    get getDinero(){
        return this.dinero;
    }

    get getNombre(){
        return this.nombre;
    }

}