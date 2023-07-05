"use strict";
// Cremaos una array con letras
const letra = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
// Creamos la clase Cines
class Cines {
    // Creamos el constructor, asignando una array vacía de asientos y preparándolos a partir del número de filas y columnas
    constructor(newPelicula, newPrecio) {
        this.pelicula = newPelicula;
        this.precio = newPrecio;
        this.asientos = [];
        this.prepararAsientos();
    }
    // Creamos los getters necesarios
    get getAsientos() {
        return this.asientos;
    }
    // Creamos un método que prepare todos los asientos, asignando por defecto que ninguno está ocupado
    prepararAsientos() {
        // Creamos un for dentro de otro para que vaya recorriendo cada fila y columna. Recorremos el primero a la inversa, ya que la fila 1 es la última
        for (let i = 8; i >= 1; i--) {
            // Creamos una fila con la interfaz Asiento, donde guardaremos el número de fila, la letra de columna y que está disponible
            let fila = [];
            for (let j = 0; j < 9; j++) {
                // Creamos la columna asiento, asignando la letra de columna, el número de fila y que por defecto no está ocupada
                const asiento = {
                    columna: letra[j],
                    fila: i,
                    ocupado: false
                };
                // Asignamos el asiento a la fila
                fila.push(asiento);
            }
            // Asignamos la fila a la columna
            this.asientos.push(fila);
        }
    }
    // Creamos un método para asignar cada asiento a cada espectador, comprobando que se encuentre disponible
    asignarAsientos(espectador) {
        // Primero comprobamos que el espectador tiene la edad suficiente para ver la pelicula y que dispone de dinero suficiente
        if (espectador.getEdad >= this.pelicula.getEdadMinima) {
            if (espectador.getDinero >= this.precio) {
                // Creamos una variable auxiliar para comprobar si el espectador se le ha asignado un asiento, en caso positivo pasará al siguiente
                let asignado = false;
                while (!asignado) {
                    // Creamos dos números aleatorios para buscar una fila y una columna
                    let fila = Math.floor(Math.random() * 8);
                    let columna = Math.floor(Math.random() * 9);
                    // Si el asiente dado por la fila y la columna no está ocupado, se le asigna al espectador, en caso contrario seguirá buscando otro asiento
                    if (this.asientos[fila][columna].ocupado == false) {
                        this.asientos[fila][columna].ocupado = true;
                        asignado = true;
                        console.log(`${espectador.getNombre} ha sido asignado a la fila ${this.asientos[fila][columna].fila} columna ${letra[columna]}`);
                    }
                }
            }
            else {
                console.log(`${espectador.getNombre} no tiene el dinero suficiente para entrar.`);
            }
        }
        else {
            console.log(`${espectador.getNombre} no tiene el la edad suficiente para entrar.`);
        }
    }
}
