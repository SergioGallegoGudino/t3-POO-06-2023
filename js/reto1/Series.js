"use strict";
const defCreador = "compañíaDef";
class Series {
    constructor(titulo = defTiulo, genero = defGenero, creador = defCreador) {
        this._titulo = titulo;
        this._genero = genero;
        this._creador = creador;
        this._numeroTemporadas = 3;
        this._entregado = false;
    }
    //---------
    //getters
    get titulo() {
        return this._titulo;
    }
    get numeroTemporadas() {
        return this._numeroTemporadas;
    }
    get genero() {
        return this._genero;
    }
    get creador() {
        return this._creador;
    }
    //---------
    //setters
    set titulo(newTitulo) {
        this._titulo = newTitulo;
    }
    set numeroTemporadas(newNumeroTemporada) {
        this._numeroTemporadas = newNumeroTemporada;
    }
    set genero(newGenero) {
        this._genero = newGenero;
    }
    set creador(newCreador) {
        this._creador = newCreador;
    }
    //---------
    //metotdo toString
    toString() {
        return (`Serie: titulo = ${this._titulo}, numero de temporadas = ${this._numeroTemporadas}, entregado = ${this._entregado}, genero = ${this._genero}, creador = ${this._creador}`);
    }
    //---------
    //metodos
    entregar() {
        this._entregado = true;
    }
    devolver() {
        this._entregado = false;
    }
    isEntregado() {
        return this._entregado;
    }
    compareTo(a) {
        if (this._numeroTemporadas > a.numeroTemporadas)
            return 1;
        else if (this._numeroTemporadas < a.numeroTemporadas)
            return -1;
        else
            return 0;
    }
}
