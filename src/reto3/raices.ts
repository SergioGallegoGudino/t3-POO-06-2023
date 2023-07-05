//class raíces para poder obtener el valor de cada incógnita
class Raices {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    // En el método discriminante haremos la operación que está justo después de la raíz cuadrada.
    getDiscriminante(): number {
      return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }
    // En el método tieneRaíces podremos comprobar si el discriminante tiene 2 soluciones diferentes.
    tieneRaices(): boolean {
        return this.getDiscriminante() >= 0;
    }
    // En el método tieneRaiz podremos comprobar si el discriminante tiene una sola solución.
    tieneRaiz(): boolean {
        return this.getDiscriminante() == 0;
    }
    // En el método calcular podremos mostrar por consola las posibles soluciones de la ecuación.
    calcular(): void {
        const discriminante = this.getDiscriminante();

        if (discriminante > 0) {
            const x1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const x2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log(`Las soluciones de la ecuación son: ${x1} y ${x2}`);
        } else if (discriminante == 0) {
            const x = -this.b / (2 * this.a);
            console.log(`La única solución posible es: ${x}`);
        } else {
        
        }
    }
    // En el método obtenerRaíces imprime las soluciones siempre y cuando hayan 2 soluciones para el discriminante.
    obtenerRaices(): void {
        if (this.tieneRaices()) {
            const x1 = (-this.b + Math.sqrt(this.getDiscriminante())) / (2 * this.a);
            const x2 = (-this.b - Math.sqrt(this.getDiscriminante())) / (2 * this.a);
            console.log(`Las raíces son: ${x1} y ${x2}`);
        } else {
            console.log("No existen soluciones para la ecuación");
        }
    }
    // En el método obtenerRaíz imprime la solución siempre y cuando haya 1 solución para el discriminante.
    obtenerRaiz(): void {
        if (this.tieneRaiz()) {
            const x = -this.b / (2 * this.a);
            console.log(`La raíz es: ${x}`);
        } else {
            console.log("No existe sólo una raíz para la ecuación");
        }
    }
}