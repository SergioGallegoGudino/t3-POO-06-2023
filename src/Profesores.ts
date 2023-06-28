type tipMateria = 'matematicas' | 'filosofia' | 'fisica';

class Profesores extends Personas {
    // Atributos
    private disponible: boolean;
    private materia: string;
    // Constructor
    constructor(nombre: string, edad: number, sexo: tipSexo, newMateria: tipMateria) {
        super(nombre, edad, sexo);
        this.materia = newMateria;
        this.disponible = Math.random() > 0.2;
    }
    // Métodos
    get getMateria(){
        return this.materia;
    }
    get getDisponible(){
        return this.disponible;
    }
    comprobarDisponibilidad() {
        
        return this.disponible;
    }
}
