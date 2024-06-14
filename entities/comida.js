import * as util from "../utils"

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
            porcionTotal += ing.medida;
            switch (ing.tipo) {
                case util.PROTEINA:
                    porcionProteina += ing.medida;
                    break;
                case util.CARBOHIDRATO:
                    porcionCarbohidrato += ing.medida;
                    break;
                case util.VEGETAL:
                    porcionVegetal += ing.medida;
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