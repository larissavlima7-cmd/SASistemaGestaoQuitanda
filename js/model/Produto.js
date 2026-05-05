// classe produto, dando atributos ao produto
export class Produto {
  // O construtor cria o objeto Produto com as suas características
  constructor(id, nome, preco, quantidade) {
    this.id = id;
    this.nome = nome;
    this.preco = parseFloat(preco); // Garante que o preço é um número decimal
    this.quantidade = parseInt(quantidade, 10); // Garante que a quantidade é um número inteiro
  }
}
