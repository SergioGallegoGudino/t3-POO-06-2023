"use strict";
// Clase Libro, cada libro tendrá el ISBN, el autor, el título y su cantidad de páginas. 
class Libro {
    // En el constructor simplemente inicializaremos los atributos vacíos.
    constructor(ISBN, titulo, autor, cantPaginas) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.cantPaginas = cantPaginas;
    }
    // Obtener la información de la clase por getters, no se colocan setters por que en ningún momento modificaremos los datos de los libros una vez añadidos. Si quisieramos modificar estos datos deberíamos añadir un setter por atributo.
    getISBN() {
        return this.ISBN;
    }
    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
    getPaginas() {
        return this.cantPaginas;
    }
    // Método to String para mostrar la información del libro.
    toString() {
        return `El libro con ISBN ${this.ISBN}, creado por ${this.autor}, tiene ${this.cantPaginas} páginas.`;
    }
}
