"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Consulta {
    constructor(animal, veterinario, data) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
    }
    getAnimal() {
        return this.animal;
    }
    getVeterinario() {
        return this.veterinario;
    }
    getData() {
        return this.data;
    }
    mostrarConsulta() {
        return "Consulta do animal " + this.animal.getNome() + " com o veterinário " + this.veterinario.getNome() + " na data " + this.data.toLocaleDateString();
    }
}
exports.default = Consulta;
