export class Objetivo {
    nombre;
    descripcion;
    cumplido = false;

    constructor (nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    completar(){
        this.cumplido = true;
    }
    descompletar(){
        this.cumplido = false;
    }
}