type tipMateria = 'matemáticas' | 'filosofía' | 'física';

class Profesor extends Personas {
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
    comprobarDisponibilidad() {
        this.disponible = Math.random() > 0.2;
        return this.disponible;
    }
}
