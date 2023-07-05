
// Creamos un tipo para el sexo
type tipSexo = 'H' | 'M';
// Creamos la clase padre Personas con sus atributos
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
        // Por defecto, todas las personas estarán disponibles
        this.disponible = true;
    }
}