"use strict";
const defTiulo = "tituloDef";
const defGenero = "generoDef";
const defComp = "compañíaDef";
class Videojuegos {
    constructor(titulo = defTiulo, genero = defGenero, comp = defComp) {
        this._titulo = titulo;
        this._genero = genero;
        this._comp = comp;
        this._entregado = false;
        this._horasEstimadas = 10;
    }
    //---------
    //getters
    get titulo() {
        return this._titulo;
    }
    get horasEstimadas() {
        return this._horasEstimadas;
    }
    get genero() {
        return this._genero;
    }
    get comp() {
        return this._comp;
    }
    //---------
    //setters
    set titulo(newTitulo) {
        this._titulo = newTitulo;
    }
    set horasEstimadas(newhorasEstimadas) {
        this._horasEstimadas = newhorasEstimadas;
    }
    set genero(newGenero) {
        this._genero = newGenero;
    }
    set comp(newComp) {
        this._comp = newComp;
    }
    //---------
    //metotdo toString
    toString() {
        return (`Videojuego: titulo = ${this._titulo}, numero de horas estimadas = ${this._horasEstimadas}, entregado = ${this._entregado}, genero = ${this._genero}, compañía = ${this._comp}`);
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
        if (this._horasEstimadas > a.horasEstimadas)
            return 1;
        else if (this._horasEstimadas < a.horasEstimadas)
            return -1;
        else
            return 0;
    }
}
