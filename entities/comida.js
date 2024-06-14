import * as util from "../utils"

const PROTEINA = 1;
const CARBOHIDRATO = 2;
const VEGETAL = 3;

export class Comida {
    tipo; // DM o AC
    descripcion;
    composicion = [];

    
    constructor(tipo) {
        this.tipo = tipo;
    }

    agregarIngrediente(ingrediente) {
        if(this.tipo = "AC") {
            this.composicion.push(ingrediente);
        }
    }

    calcularComposicionEnArray() {
        let porcionTotal = 0;
        let porcionProteina = 0;
        let porcionCarbohidrato = 0;
        let porcionVegetal = 0;

        this.composicion.forEach(ing => {
            let m = ing.medida;
            porcionTotal += m;
            switch (ing.tipo) {
                case PROTEINA:
                    porcionProteina += m;
                    break;
                case CARBOHIDRATO:
                    porcionCarbohidrato += m;
                    break;
                case VEGETAL:
                    porcionVegetal += m;
                    break;
            }
        });
        const porcentajeProteina = util.promedio(porcionTotal,porcionProteina);
        const porcentajeCarbohidrato = util.promedio(porcionTotal,porcionCarbohidrato);
        const porcentajeVegetal = util.promedio(porcionTotal,porcionVegetal);
        return {porcionTotal, porcentajeProteina, porcentajeCarbohidrato, porcentajeVegetal}
    }
    
    esFuerteEnProteina() {
        return this.calcularComposicionEnArray().porcentajeProteina >= 50;
    }
    
    esBienVerde() {
        return this.calcularComposicionEnArray().porcentajeVegetal >= 35;
    }
}