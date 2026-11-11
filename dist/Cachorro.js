"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Cachorro extends Animal_1.default {
    constructor(nome, idade, tutor, passeioDiario) {
        super(nome, idade, tutor);
        this.passeioDiario = passeioDiario;
    }
    getPasseioDiario() {
        return this.passeioDiario;
    }
    setPasseioDiario(passeioDiario) {
        this.passeioDiario = passeioDiario;
    }
    emitirSom() {
        return "O cachorro late: Au au!";
    }
    descreverCuidados() {
        return "O cachorro precisa de passeio diário";
    }
}
exports.default = Cachorro;
