"use strict";
// Creamos los libros a través de la clase que encontraremos en ./libro.ts
const lasdostorres = new Libro("9780261103870", "El señor de los anillos: Las dos torres", "J.R.R Tolkien", 352);
const lospilaresdelatierra = new Libro("9780307392275", "Los pilares de la tierra", "Ken Follet", 1040);
// Mostramos la información de los 2 libros que tenemos en la biblioteca.
console.log(lasdostorres.toString());
console.log(lospilaresdelatierra.toString());
// Creamos un IF para comprobar cuál de los dos libros tiene más páginas añadiendo un else al final por si tienen el mismo número de páginas.
if (lasdostorres.getPaginas() > lospilaresdelatierra.getPaginas()) {
    console.log(`${lasdostorres.getTitulo()} tiene más páginas que ${lospilaresdelatierra.getTitulo()}.`);
}
else if (lasdostorres.getPaginas() < lospilaresdelatierra.getPaginas()) {
    console.log(`${lospilaresdelatierra.getTitulo()} tiene más páginas que ${lasdostorres.getTitulo()}.`);
}
else {
    console.log(`${lasdostorres} tiene las mismas páginas que ${lospilaresdelatierra}`);
}
