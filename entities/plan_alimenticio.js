import * as util from "../utils"
export class PlanAlimenticio {

    edad;
    pesoActual;
    medidaCintura;
    duracion;
    objetivos = [];
    comidas = [];
    colaciones = [];
    bebidas = [];

    agregarComida(comida) {
        this.comidas.push(comida);
    }
    agregarColacion(colacion) {
        this.colaciones.push(colacion);
    }
    agregarObjetivo(objetivo) {
        this.objetivos.push(objetivo);
    }
    agregarBebida(bebida) {
        this.bebidas.push(bebida);
    }

    cantidadDeComidas() {
        return this.comidas.length;
    }

    obtenerAlmuerzoYCena() {
        return this.comidas.filter(c => c.tipo == "AC")
    }

    generarEvaluacion() {
        let objTotales = 0;
        let objCumplidos = 0;

        this.objetivos.forEach(obj => {
            objTotales ++;
            if(obj.cumplido) {objCumplidos++;}
        });
        let porcentajeCumplido = util.promedio(objTotales, objCumplidos);
        
        let resp = "";
        
        // const mensajes = ["Excelente","Muy Buena","Buena"];
        // const puntajes = [100,60,50];

        // Voy a mostrar mensaje calificacion
        if(porcentajeCumplido == 100) {
            resp = "Excelente";
        } else if (porcentajeCumplido > 60) {
            resp = "Muy Bueno";
        } else if (porcentajeCumplido <= 60 && porcentajeCumplido >= 50){
            resp = "Bueno";
        } else {
            resp = "Regular";
        }
        
        return resp;
    }

    cantidadDeComidasDeTipo(tipo) {
        let cantidad = 0;
        this.comidas.forEach(c => {
            cantidad += (c.tipo == tipo) ? 1 : 0;
        });
        return cantidad;
    }
    // cantidadDeComidasDeTipo(tipo) {
    //     let comidasDelTipo = this.comidas.filter(c => {
    //         c.tipo == tipo;
    //     })
    //     return comidasDelTipo.length;
    // }

    cantidadDeBebidasPermitidas() {
        return this.bebidas.length;
    }

    cantidadDeColacionesPermitidas() {
        return this.colaciones.length;
    }

    esFuerteEnProteina() {
        let almuerzoYcena = this.obtenerAlmuerzoYCena();
        // let cumple = true;
        // almuerzoYcena.forEach(c => {
        //     if (!c.esFuerteEnProteina()) {
        //         cumple = false;
        //     };
        // });
        return almuerzoYcena.every(ac => ac.esFuerteEnProteina());
    }

    esBienVerde() {
        let almuerzoYcena = this.obtenerAlmuerzoYCena();
        // let cumple = true;
        // almuerzoYcena.forEach(c => {
        //     if (!c.esBienVerde()) {
        //         cumple = false;
        //     };
        // });
        
        return almuerzoYcena.every(ac => ac.esBienVerde());
    }
}

