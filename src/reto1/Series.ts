const defCreador: string = "compañíaDef"

class Series implements Entregable {
    private _titulo: string;
    private _numeroTemporadas: number;
    private _entregado: boolean;
    private _genero: string;
    private _creador: string;

    constructor(titulo: string = defTiulo, genero: string = defGenero, creador: string = defCreador){
        this._titulo = titulo;
        this._genero = genero;
        this._creador = creador;
        this._numeroTemporadas = 3;
        this._entregado = false;
    }

    //---------
    //getters
    get titulo(): string{
        return this._titulo;
    }

    get numeroTemporadas(): number{
        return this._numeroTemporadas;
    }

    get genero(): string{
        return this._genero;
    }

    get creador(): string{
        return this._creador;
    }
    
    //---------
    //setters
    set titulo(newTitulo: string){
        this._titulo = newTitulo;
    }

    set numeroTemporadas(newNumeroTemporada: number){
        this._numeroTemporadas = newNumeroTemporada;
    }

    set genero(newGenero: string){
        this._genero = newGenero;
    }

    set creador(newCreador: string){
        this._creador = newCreador;
    }

    //---------
    //metotdo toString
    toString(): string{
        return(`Serie: titulo = ${this._titulo}, numero de temporadas = ${this._numeroTemporadas}, entregado = ${this._entregado}, genero = ${this._genero}, creador = ${this._creador}`)
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

    compareTo(a: Series): number {
        if (this._numeroTemporadas > a.numeroTemporadas)
            return 1;
        else if (this._numeroTemporadas < a.numeroTemporadas)
            return -1;
        else
            return 0;
    }
}