//instanciamos 5 series y 5 videojuegos
let serie1 = new Series("Juego de tronos", "HBO");
let serie2 = new Series("Rick and Morty", "Netflix");
let serie3 = new Series("Prison break", "Prime Video");
let serie4 = new Series("Mr robot", "Prime Vdieo");
let serie5 = new Series("Vikingos", "HBO");

let videojuego1 = new Videojuegos("Call of Duty", "guerra", "Activision", 23);
let videojuego2 = new Videojuegos("La barbie y el casscanuezes", "aventuras", "Companyia 2"); //por defecto el ultimo parámetro es 10
let videojuego3 = new Videojuegos("Fortnite", "battle royale", "Epic Games", 45);
let videojuego4 = new Videojuegos("Battlefiled", "guerra", "Activision", 28);
let videojuego5 = new Videojuegos("Clash of Clans", "estartegia", "Super cell", 31);

//los ponemos en dos arrays
const arraySeries: Series[] = [serie1, serie2, serie3, serie4, serie5];
const arrayVideojuegos: Videojuegos[] = [videojuego1, videojuego2, videojuego3, videojuego4, videojuego5];

//entregamos algunas de estas series y videojuegos
serie2.entregar();
serie5.entregar();

videojuego1.entregar();
videojuego3.entregar();
videojuego4.entregar();

//para comprobar que realmente han sido entregados
console.log(arraySeries);
console.log(arrayVideojuegos);
console.log("--------------\n\n") //separador

//método para contar Entregados pasando por parámetro un entregable. No devuelve nada, simplemente imprime por consola el resultado
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

//usamos la funcion anterior
contarEntregados(arraySeries); // numero esperado: 2
console.log("--------------\n\n") //separador
contarEntregados(arrayVideojuegos); // numero esperado: 3
console.log("--------------\n\n") //separador

//setteamos el numero de temporadas de alguans series para que sean diferentes al default
serie2.setNumeroTemporadas(8);
serie3.setNumeroTemporadas(6);
serie5.setNumeroTemporadas(9);

//funcion que saca por pantalla la información del método más largo
const entregableMasLargo = (entregables: Entregable[]) => {
    let masLargo: Entregable = entregables[0];
    for (let entregable of entregables) {
        if (entregable.compareTo(masLargo) > 0) 
            masLargo = entregable;
        
    }

    let tipoEntregable: string;
    if(masLargo instanceof Videojuegos){
        tipoEntregable = "Videojuego"
    }else{
        tipoEntregable = "Serie"
    }
    console.log(tipoEntregable + " más larg@:");
    console.log(masLargo.toString());
}

//uso de la funcion anterior
entregableMasLargo(arrayVideojuegos); //videojuego esperado: videojuego3 (Fortnite)
console.log("--------------\n\n")
entregableMasLargo(arraySeries); //serie esperada: serie5 (Vikingos)
console.log("--------------\n\n")