const defTiulo: string = ""
const defGenero: string = ""
const defComp: string = ""
const defHoras: number = 10;

class Videojuegos implements Entregable{
    private titulo: string;
    private horasEstimadas: number;
    private entregado: boolean;
    private genero: string;
    private comp: string;

    constructor(titulo: string = defTiulo, genero: string = defGenero, comp: string = defComp, horasEstimadas: number = defHoras){
        this.titulo = titulo;
        this.genero = genero;
        this.comp = comp;
        this.entregado = false;
        this.horasEstimadas = horasEstimadas;
    }

    //---------
    //getters
    getTitulo(): string{
        return this.titulo;
    }

    getHorasEstimadas(): number{
        return this.horasEstimadas;
    }

    getGenero(): string{
        return this.genero;
    }

    getComp(): string{
        return this.comp;
    }
    
    //---------
    //setters
    setTitulo(newTitulo: string){
        this.titulo = newTitulo;
    }

    setHorasEstimadas(newhorasEstimadas: number){
        this.horasEstimadas = newhorasEstimadas;
    }

    setGenero(newGenero: string){
        this.genero = newGenero;
    }

    setComp(newComp: string){
        this.comp = newComp;
    }

    //---------
    //metotdo toString
    toString(): string{
        return(`Videojuego: titulo = ${this.titulo}, numero de horas estimadas = ${this.horasEstimadas}, entregado = ${this.entregado}, genero = ${this.genero}, compañía = ${this.comp}`)
    }

    //---------
    //metodos
    entregar(): void{
        this.entregado = true;
    }

    devolver(): void{
        this.entregado = false;
    }

    isEntregado(): boolean{
        return this.entregado;
    }

    // devuelve:
    // 1: si this es MAYOR al videojuego pasado por parámetro
    //-1: si this es MENOR al videojuego pasado por parámetro
    // 0: si this es IGUAL al videojuego pasado por parámetro
    compareTo(a: Videojuegos): number {
        if (this.horasEstimadas > a.horasEstimadas)
            return 1;
        else if (this.horasEstimadas < a.horasEstimadas)
            return -1;
        else
            return 0;
    }
}