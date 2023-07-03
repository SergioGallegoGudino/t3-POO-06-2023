let estudiante1 = new Alumnos ("Paco", 12, "H", 2);
let estudiante2 = new Alumnos ("Enrique", 13, "H", 4);
let estudiante3 = new Alumnos ("Anna", 16, "M", 9);
let estudiante4 = new Alumnos ("Luis", 10, "H", 2);
let estudiante5 = new Alumnos ("Hermenegildo", 12, "H", 5);
let estudiante6 = new Alumnos ("Romulana", 11, "M", 6);
let estudiante7 = new Alumnos ("Purificación", 11, "M", 10);
let estudiante8 = new Alumnos ("Julián", 12, "H", 9);
let estudiante9 = new Alumnos ("Maribel", 15, "M", 4);
let estudiante10 = new Alumnos ("Manolo", 14, "M", 8);
let estudiante11 = new Alumnos ("Juana", 13, "M", 12);

let prof1 = new Profesores ("Hildero", 46, "H", "fisica", );
let prof2 = new Profesores ("Luisa", 25, "H", "fisica");
let prof3 = new Profesores ("Galia", 35, "H", "filosofia");
let prof4 = new Profesores ("Vico", 60, "H", "matematicas");

let a1 = [estudiante1, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6];
let a2 = [estudiante10, estudiante11, estudiante9, estudiante8, estudiante7, estudiante6];

let p1 = [prof1, prof2, prof3, prof4];

const pasarLista = (a: Alumnos[] | Profesores[]) => {
    for(let i = 0; i < a.length; i++){
        a[i].pasarLista();
    }
}

pasarLista(a1);
pasarLista(a2);
pasarLista(p1);

//
console.log(a1);
console.log(a2);
console.log(p1);

let aula1 = new Aulas (1, 6, "matematicas", a1, prof4);
let aula2 = new Aulas (2, 6, "filosofia", a2, prof3);
let aula3 = new Aulas (2, 6, "fisica", a2, prof4);

const darClase = (aula: Aulas) => {
    if(aula.getAlumnos == null || aula.getProfesor == null){
        console.log("No pueden impartir clases.");
    } else{
        console.log("Hay clases.");
        aula.aprovados();
    }
}

console.log("\nAULA 1:");
darClase(aula1);

console.log("\n\nAULA 2:");
darClase(aula2);

console.log("\n\nAULA 3:");
darClase(aula3);



