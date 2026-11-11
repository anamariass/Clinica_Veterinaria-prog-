"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Gato extends Animal_1.default {
    constructor(nome, idade, tutor, possuiArranhador) {
        super(nome, idade, tutor);
        this.possuiArranhador = possuiArranhador;
    }
    getPossuiArranhador() {
        return this.possuiArranhador;
    }
    setPossuiArranhador(possuiArranhador) {
        this.possuiArranhador = possuiArranhador;
    }
    emitirSom() {
        return "O gato mia: Miau!";
    }
    descreverCuidados() {
        return "O gato precisa de um arranhador";
    }
}
exports.default = Gato;
