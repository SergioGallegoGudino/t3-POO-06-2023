// Creamos un tipo para las materiasa
type tipMateria = 'matematicas' | 'filosofia' | 'fisica';
// Creamos la classe Profesores que extiende de Personas, pasando los atributos de la superclase además del atributo materia
class Profesores extends Personas {
    // Atributos
    private materia: string;
    // Constructor
    constructor(nombre: string, edad: number, sexo: tipSexo, newMateria: tipMateria) {
        super(nombre, edad, sexo);
        this.materia = newMateria;
    }
    // Métodos
    get getMateria(){
        return this.materia;
    }
    get getDisponible(){
        return this.disponible;
    }

    //metodo para asignar disponibilidad
    pasarLista(): void {
        this.disponible = Math.random() > 0.2;
    }
}
