let pel1 = new Peliculas("Fast X", 2, 16, "Louis Leterrier");

let cine1 = new Cines(pel1, 5);

let esp1 = new Espectadores("Enrique", 12, 5);
let esp2 = new Espectadores("María", 16, 2);
let esp3 = new Espectadores("Manuel", 18, 7);
let esp4 = new Espectadores("Carmen", 18, 6);
let esp5 = new Espectadores("Manolo", 20, 9);

cine1.asignarAsientos(esp1);
cine1.asignarAsientos(esp2);
cine1.asignarAsientos(esp3);
cine1.asignarAsientos(esp4);
cine1.asignarAsientos(esp5);

console.log(cine1);