// js/model/QuitandaModel.js
import { Produto } from "./Produto.js";

export class QuitandaModel {
  constructor() {
    this.produtos = [];
    this.historico = []; // Nova lista para o histórico
  }

  // Regista ações no histórico
  registrarHistorico(tipo, produtoNome, quantidade) {
    const dataHora = new Date().toLocaleString("pt-BR");
    this.historico.unshift({ dataHora, tipo, produtoNome, quantidade }); // unshift coloca no início da lista
  }

  adicionarProduto(nome, preco, quantidade) {
    const id = Date.now();
    const novoProduto = new Produto(id, nome, preco, quantidade);
    this.produtos.push(novoProduto);

    // Regista a entrada no histórico
    this.registrarHistorico("Entrada", nome, quantidade);

    return novoProduto;
  }

  // Atualizado para receber uma quantidade variável
  venderProduto(id, qtdVenda) {
    const produto = this.produtos.find((p) => p.id === id);

    if (produto && produto.quantidade >= qtdVenda && qtdVenda > 0) {
      produto.quantidade -= qtdVenda;

      // Regista a saída (venda) no histórico
      this.registrarHistorico("Saída", produto.nome, qtdVenda);
      return true;
    }
    return false;
  }

  obterProdutos() {
    return this.produtos;
  }

  obterHistorico() {
    return this.historico;
  }
}
