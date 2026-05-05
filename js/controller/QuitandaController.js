// js/controller/QuitandaController.js

export class QuitandaController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAdicionarProduto(this.handleAdicionarProduto.bind(this));
    this.view.bindVenderProduto(this.handleVenderProduto.bind(this));

    this.atualizarView();
  }

  handleAdicionarProduto(nome, preco, quantidade) {
    if (nome && preco > 0 && quantidade > 0) {
      this.model.adicionarProduto(nome, preco, quantidade);
      this.atualizarView();
    } else {
      this.view.mostrarMensagem(
        "Insira dados válidos. Preço e quantidade devem ser maiores que zero.",
      );
    }
  }

  // Agora recebe também a quantidade a ser vendida
  handleVenderProduto(id, qtdVenda) {
    if (isNaN(qtdVenda) || qtdVenda <= 0) {
      this.view.mostrarMensagem(
        "Por favor, informe uma quantidade válida para venda.",
      );
      return;
    }

    const sucesso = this.model.venderProduto(id, qtdVenda);

    if (sucesso) {
      this.atualizarView();
    } else {
      this.view.mostrarMensagem("Estoque insuficiente para esta quantidade!");
    }
  }

  // Atualiza as DUAS tabelas na ecrã
  atualizarView() {
    const produtos = this.model.obterProdutos();
    const historico = this.model.obterHistorico();

    this.view.renderizarProdutos(produtos);
    this.view.renderizarHistorico(historico);
  }
}
