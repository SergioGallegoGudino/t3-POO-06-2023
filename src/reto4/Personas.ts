type tipSexo = 'H' | 'M';

abstract class Personas {
    //Atributos
    protected nombre: string;
    protected edad: number;
    protected sexo: tipSexo;
    protected disponible: boolean;

    //constructor
    constructor (newNombre: string, newEdad: number, newSexo: tipSexo){
        this.nombre = newNombre;
        this.edad = newEdad;
        this.sexo = newSexo;
        this.disponible = true;
    }
}