"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clinica {
    constructor(nome) {
        this.nome = nome;
        this.listaAnimais = [];
        this.listaFuncionarios = [];
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    adicionarAnimal(animal) {
        this.listaAnimais[this.listaAnimais.length] = animal;
    }
    adicionarFuncionario(funcionario) {
        this.listaFuncionarios[this.listaFuncionarios.length] = funcionario;
    }
    getListaAnimais() {
        return this.listaAnimais;
    }
    getListaFuncionarios() {
        return this.listaFuncionarios;
    }
    mostrarAnimais() {
        for (let i = 0; i < this.listaAnimais.length; i++) {
            console.log(this.listaAnimais[i].getNome());
        }
    }
    mostrarFuncionarios() {
        for (let i = 0; i < this.listaFuncionarios.length; i++) {
            console.log(this.listaFuncionarios[i].getNome());
        }
    }
}
exports.default = Clinica;
