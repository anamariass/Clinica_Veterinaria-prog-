"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Ave extends Animal_1.default {
    constructor(nome, idade, tutor, possuiGaiola) {
        super(nome, idade, tutor);
        this.possuiGaiola = possuiGaiola;
    }
    getPossuiGaiola() {
        return this.possuiGaiola;
    }
    setPossuiGaiola(possuiGaiola) {
        this.possuiGaiola = possuiGaiola;
    }
    emitirSom() {
        return "A ave canta";
    }
    descreverCuidados() {
        return "A ave precisa de uma gaiola adequada";
    }
}
exports.default = Ave;
