"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Recepcionista extends Funcionario_1.default {
    constructor(nome, matricula, salario) {
        super(nome, matricula, salario);
        this.agendamentosC = 0;
    }
    getAgendamentosConfirmados() {
        return this.agendamentosC;
    }
    agendarAtendimento() {
        return "Atendimento agendado";
    }
    confirmarAgendamento() {
        this.agendamentosC = this.agendamentosC + 1;
        return "Agendamento confirmado";
    }
    calcularBonus(valorUnitario) {
        return this.agendamentosC * valorUnitario;
    }
}
exports.default = Recepcionista;
