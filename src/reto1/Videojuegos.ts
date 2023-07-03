const defTiulo: string = "tituloDef"
const defGenero: string = "generoDef"
const defComp: string = "compañíaDef"

class Videojuegos implements Entregable{
    private _titulo: string;
    private _horasEstimadas: number;
    private _entregado: boolean;
    private _genero: string;
    private _comp: string;

    constructor(titulo: string = defTiulo, genero: string = defGenero, comp: string = defComp){
        this._titulo = titulo;
        this._genero = genero;
        this._comp = comp;
        this._entregado = false;
        this._horasEstimadas = 10;
    }

    //---------
    //getters
    get titulo(): string{
        return this._titulo;
    }

    get horasEstimadas(): number{
        return this._horasEstimadas;
    }

    get genero(): string{
        return this._genero;
    }

    get comp(): string{
        return this._comp;
    }
    
    //---------
    //setters
    set titulo(newTitulo: string){
        this._titulo = newTitulo;
    }

    set horasEstimadas(newhorasEstimadas: number){
        this._horasEstimadas = newhorasEstimadas;
    }

    set genero(newGenero: string){
        this._genero = newGenero;
    }

    set comp(newComp: string){
        this._comp = newComp;
    }

    //---------
    //metotdo toString
    toString(): string{
        return(`Videojuego: titulo = ${this._titulo}, numero de horas estimadas = ${this._horasEstimadas}, entregado = ${this._entregado}, genero = ${this._genero}, compañía = ${this._comp}`)
    }

    //---------
    //metodos
    entregar(): void{
        this._entregado = true;
    }

    devolver(): void{
        this._entregado = false;
    }

    isEntregado(): boolean{
        return this._entregado;
    }

    compareTo(a: Videojuegos): number {
        if (this._horasEstimadas > a.horasEstimadas)
            return 1;
        else if (this._horasEstimadas < a.horasEstimadas)
            return -1;
        else
            return 0;
    }
}