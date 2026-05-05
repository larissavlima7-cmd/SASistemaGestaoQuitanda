import { Produto } from "./Produto.js";

export class QuitandaModel {
  constructor() {
    this.produtos = [];
    this.historico = []; // essa parte é para armazenar o histórico de vendas, onde cada item é um objeto com data/hora, tipo (entrada ou saída), nome do produto e quantidade.
  }

  // aqui nós vamos criar um método para registrar as transações no histórico. Ele recebe o tipo da transação (entrada ou saída), o nome do produto e a quantidade, e registra
  registrarHistorico(tipo, produtoNome, quantidade) {
    const dataHora = new Date().toLocaleString("pt-BR");
    this.historico.unshift({ dataHora, tipo, produtoNome, quantidade }); // unshift coloca no início da lista
  }

  adicionarProduto(nome, preco, quantidade) {
    // Converte o nome para minúsculas e tira espaços sobrando nas pontas
    const nomeFormatado = nome.trim().toLowerCase();

    // Vai conferir se já existe um produto com esse exato nome
    const produtoExistente = this.produtos.find(
      (p) => p.nome.toLowerCase() === nomeFormatado,
    );

    //condição para se o produto existir
    if (produtoExistente) {
      produtoExistente.quantidade += parseInt(quantidade, 10);
      produtoExistente.preco = parseFloat(preco); // Atualiza caso o preço tenha mudado

      // Regista a entrada no histórico com o nome original
      this.registrarHistorico("Entrada", produtoExistente.nome, quantidade);

      return produtoExistente;
    } else {
    //   se o produto não existir ele vai criar um do zero
      const id = Date.now();
      const novoProduto = new Produto(id, nome, preco, quantidade);
      this.produtos.push(novoProduto);

      // Regista a entrada no histórico
      this.registrarHistorico("Entrada", nome, quantidade);

      return novoProduto;
    }
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

  // aqui vamos criar um método para obter a lista de produtos, que simplesmente retorna o array de produtos armazenado no modelo. Esse método será chamado pelo controlador para obter os dados mais recentes do modelo e atualizar a visão.
  obterProdutos() {
    return this.produtos;
  }

  // e aqui vamos criar um método para obter o histórico de vendas, que retorna o array de transações armazenado no modelo. Esse método será chamado pelo controlador para obter os dados mais recentes do histórico e atualizar a visão.
  obterHistorico() {
    return this.historico;
  }
}
