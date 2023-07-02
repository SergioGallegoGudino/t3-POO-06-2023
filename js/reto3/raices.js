"use strict";
class Raices {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminante() {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }
    tieneRaices() {
        return this.getDiscriminante() >= 0;
    }
    tieneRaiz() {
        return this.getDiscriminante() == 0;
    }
    calcular() {
        const discriminante = this.getDiscriminante();
        if (discriminante > 0) {
            const x1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const x2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log(`Las soluciones de la ecuación son: ${x1} y ${x2}`);
        }
        else if (discriminante == 0) {
            const x = -this.b / (2 * this.a);
            console.log(`La única solución posible es: ${x}`);
        }
        else {
        }
    }
    obtenerRaices() {
        if (this.tieneRaices()) {
            const x1 = (-this.b + Math.sqrt(this.getDiscriminante())) / (2 * this.a);
            const x2 = (-this.b - Math.sqrt(this.getDiscriminante())) / (2 * this.a);
            console.log(`Las raíces son: ${x1} y ${x2}`);
        }
        else {
            console.log("No existen soluciones para la ecuación");
        }
    }
    obtenerRaiz() {
        if (this.tieneRaiz()) {
            const x = -this.b / (2 * this.a);
            console.log(`La raíz es: ${x}`);
        }
        else {
            console.log("No existe sólo una raíz para la ecuación");
        }
    }
}
