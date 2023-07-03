// Cremaos una array con letras
const letra = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
// Creamos la interface Asiento que utilizaremos para identificar todos los asientos
interface Asiento {
    columna: string;
    fila:number;
    ocupado: boolean;
}
// Creamos la clase Cines
class Cines{
    private pelicula:Peliculas;
    private precio:number;
    private asientos: Asiento[][];

    constructor(newPelicula:Peliculas, newPrecio:number){
        this.pelicula = newPelicula;
        this.precio = newPrecio;
        this.asientos = [];
        this.prepararAsientos();
    }

    get getAsientos(): Asiento[][] | null{
        return this.asientos;
    }

    prepararAsientos(){
        for (let i = 8; i >= 1; i--) {
            let fila: Asiento [] = [];
            for (let j = 0; j < 9; j++) {
                const asiento: Asiento = {
                    columna: letra[j],
                    fila: i,
                    ocupado: false
                };
                fila.push(asiento);
            }
            this.asientos.push(fila);
        }
    }

    asignarAsientos(espectador:Espectadores){
        if(espectador.getEdad >=  this.pelicula.getEdadMinima){
            if(espectador.getDinero >= this.precio){
                let asignado = false;
                while(!asignado){
                    let fila = Math.floor(Math.random() * 8);
                    let columna = Math.floor(Math.random() * 9);
                    if(this.asientos[fila][columna].ocupado == false){
                        this.asientos[fila][columna].ocupado = true;
                        asignado = true;
                        console.log(`${espectador.getNombre} ha sido asignado a la fila ${this.asientos[fila][columna].fila} columna ${letra[columna]}`);
                    }
                }
            } else{
                console.log(`${espectador.getNombre} no tiene el dinero suficiente para entrar.`);
            }
        } else{
            console.log(`${espectador.getNombre} no tiene el la edad suficiente para entrar.`);
        }
    }

}