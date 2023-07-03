let serie1 = new Series("Juego de tronos", "aventuras", "HBO");
let serie2 = new Series("Rick and Morty", "humor", "Netflix");
let serie3 = new Series("Prison break", "aventuras", "Prime Video");
let serie4 = new Series("Mr robot", "drama", "Prime Vdieo");
let serie5 = new Series("Vikingos", "historia", "HBO");

let videojuego1 = new Videojuegos("Call of Duty", "guerra", "Activision");
let videojuego2 = new Videojuegos("La barbie y el casscanuezes", "aventuras", "Companyia 2");
let videojuego3 = new Videojuegos("Fortnite", "battle royale", "Epic Games");
let videojuego4 = new Videojuegos("Battlefiled", "guerra", "Activision");
let videojuego5 = new Videojuegos("Clash of Clans", "estartegia", "Super cell");

const arraySeries: Series[] = [serie1, serie2, serie3, serie4, serie5];
const arrayVideojuegos: Videojuegos[] = [videojuego1, videojuego2, videojuego3, videojuego4, videojuego5];

serie2.entregar();
serie5.entregar();

videojuego1.entregar();
videojuego3.entregar();
videojuego4.entregar();

console.log(arraySeries);
console.log(arrayVideojuegos);

console.log("--------------\n\n")
const contarEntregados = (entregables: Entregable[]) => {
    console.log("Entregados:")
    let cont = 0;
    for (let entregable of entregables){
        if (entregable.isEntregado()){
            cont++;
            console.log(entregable.toString());
        }
    }
    console.log("Numero de entregas: " + cont);
}

contarEntregados(arraySeries);
console.log("--------------\n\n")
contarEntregados(arrayVideojuegos);
console.log("--------------\n\n")

const videojuegoMasLargo = (videojuegos: Videojuegos[]) => {
    let masLargo: Videojuegos = videojuegos[0];
    for (let videojuego of videojuegos) {
        if (videojuego.compareTo(masLargo) > 0) 
            masLargo = videojuego;
        
    }
    console.log("Videojuego más largo:");
    console.log(masLargo.toString());
}

videojuegoMasLargo(arrayVideojuegos);