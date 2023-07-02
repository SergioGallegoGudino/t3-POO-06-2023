// Clase Libro, cada libro tendrá el ISBN, el autor, el título y su cantidad de páginas. 
class Libro {
    private ISBN: string;
    private titulo: string;
    private autor: string;
    private cantPaginas: number;
    // En el constructor simplemente inicializaremos los atributos vacíos.
    constructor(ISBN: string, titulo: string, autor: string, cantPaginas: number) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.cantPaginas = cantPaginas;
    }
    // Obtener la información de la clase por getters, no se colocan setters por que en ningún momento modificaremos los datos de los libros una vez añadidos. Si quisieramos modificar estos datos deberíamos añadir un setter por atributo.
    public getISBN(): string {
        return this.ISBN;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getAutor(): string {
        return this.autor;
    }
    
    public getPaginas(): number {
        return this.cantPaginas;
    }
    
    // Método to String para mostrar la información del libro.
    public toString(): string {
        return `El libro con ISBN ${this.ISBN}, creado por ${this.autor}, tiene ${this.cantPaginas} páginas.`;
    }
}