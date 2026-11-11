"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Veterinario extends Funcionario_1.default {
    constructor(nome, matricula, salario) {
        super(nome, matricula, salario);
        this.consultasRealizadas = 0;
    }
    getConsultasRealizadas() {
        return this.consultasRealizadas;
    }
    realizarConsulta() {
        this.consultasRealizadas = this.consultasRealizadas + 1;
        return "Consulta realizada pelo veterinário";
    }
    prescreverTratamento(tratamento) {
        return "Tratamento prescrito: " + tratamento;
    }
    calcularBonus(valorUnitario) {
        return this.consultasRealizadas * valorUnitario;
    }
}
exports.default = Veterinario;
