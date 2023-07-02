let estudiante1 = new Alumnos ("Paco", 12, "H", 7, );
let estudiante2 = new Alumnos ("Enrique", 13, "H", 4);
let estudiante3 = new Alumnos ("Anna", 16, "M", 9);
let estudiante4 = new Alumnos ("Luis", 10, "H", 2);
let estudiante5 = new Alumnos ("Hermenegildo", 12, "H", 5);
let estudiante6 = new Alumnos ("Romulana", 11, "M", 1);
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

let aula1 = new Aulas (1, 6, "matematicas", a1, prof4);
let aula2 = new Aulas (2, 6, "filosofia", a1, prof3);

let p1 = [prof1, prof2, prof3, prof4];

const assignarDisponibilidad = (a: Alumnos[] | Profesores[]) => {
    for(let i = 0; i < a.length; i++){
        a[i].comprobarDisponibilidad;
    }
}

assignarDisponibilidad(a1);
assignarDisponibilidad(a2);
assignarDisponibilidad(p1);



console.log(a1);
console.log(a2);
console.log(p1);

if(aula1.getAlumnos == null || aula1.getProfesor == null){
    console.log("No pueden impartir clases.");
} else{
    console.log("Hay clases.");
    aula1.aprovados;
}
