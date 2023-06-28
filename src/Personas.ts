type tipSexo = 'H' | 'M';

class Personas {
    //Atributos
    protected nombre: string;
    protected edad: number;
    protected sexo: tipSexo;

    //constructor
    constructor (newNombre: String, newEdad: number, newSexo: tipSexo){
        this.nombre = newNombre;
        this.edad = newEdad;
        this.sexo = newSexo;
    }
}