export class Objetivo {
    nombre;
    descripcion;
    cumplido = false;

    constructor (nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    // estaCumplido(){
    //     return this.cumplido;
    // }
    completar(){
        this.cumplido = true;
    }
    descompletar(){
        this.cumplido = false;
    }
}