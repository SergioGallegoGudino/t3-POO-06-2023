"use strict";
// Creamos una pelicula con su edad minima requierida
let pel1 = new Peliculas("Fast X", 2, 16, "Louis Leterrier");
// Creamos la clase Cines con la pelicula que se va a estrenar y su precio
let cine1 = new Cines(pel1, 5);
// Creamos unos cuantos espectadores con diferentes edades y dinero
let esp1 = new Espectadores("Enrique", 12, 5);
let esp2 = new Espectadores("María", 16, 2);
let esp3 = new Espectadores("Manuel", 18, 7);
let esp4 = new Espectadores("Carmen", 18, 6);
let esp5 = new Espectadores("Manolo", 20, 9);
// Asignamos estos espectadores al cine
cine1.asignarAsientos(esp1);
cine1.asignarAsientos(esp2);
cine1.asignarAsientos(esp3);
cine1.asignarAsientos(esp4);
cine1.asignarAsientos(esp5);
// Mostramos por consola el resultado
console.log(cine1);
