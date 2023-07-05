const defCreador: string = "" 
const defTemporadas: number = 3;
const defEntregado: boolean = false;

class Series implements Entregable {
    private titulo: string;
    private numeroTemporadas: number;
    private entregado: boolean;
    private genero: string;
    private creador: string;

    constructor(titulo: string = defTiulo, creador: string = defCreador){
        this.titulo = titulo;
        this.genero = defGenero;
        this.creador = creador;
        this.numeroTemporadas = defTemporadas;
        this.entregado = defEntregado;
    }

    //---------
    //getters
    getTitulo(): string{
        return this.titulo;
    }

    getNumeroTemporadas(): number{
        return this.numeroTemporadas;
    }

    getGenero(): string{
        return this.genero;
    }

    getCreador(): string{
        return this.creador;
    }
    
    //---------
    //setters
    setTitulo(newTitulo: string){
        this.titulo = newTitulo;
    }

    setNumeroTemporadas(newNumeroTemporada: number){
        this.numeroTemporadas = newNumeroTemporada;
    }

    setGenero(newGenero: string){
        this.genero = newGenero;
    }

    setCreador(newCreador: string){
        this.creador = newCreador;
    }

    //---------
    //metotdo toString
    toString(): string{
        return(`Serie: titulo = ${this.titulo}, numero de temporadas = ${this.numeroTemporadas}, entregado = ${this.entregado}, genero = ${this.genero}, creador = ${this.creador}`)
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

    compareTo(a: Series): number {
        if (this.numeroTemporadas > a.numeroTemporadas)
            return 1;
        else if (this.numeroTemporadas < a.numeroTemporadas)
            return -1;
        else
            return 0;
    }
}