// essa parte é o controlador, que liga o modelo e a visão. Ele recebe as ações do usuário, processa os dados usando o modelo e atualiza a visão.
export class QuitandaController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAdicionarProduto(this.handleAdicionarProduto.bind(this));
    this.view.bindVenderProduto(this.handleVenderProduto.bind(this));

    this.atualizarView();
  }

  // essa parte é o método que lida com a adição de produtos. Ele verifica se os dados são válidos antes de chamar o modelo para adicionar o produto e atualizar a visão.
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

  // agora recebe também a quantidade a ser vendida
  handleVenderProduto(id, qtdVenda) {
    if (isNaN(qtdVenda) || qtdVenda <= 0) {
      this.view.mostrarMensagem(
        "Por favor, informe uma quantidade válida para venda.",
      );
      return;
    }

    // aqui é para verificar se a venda é bem-sucedida, ou seja, se há estoque suficiente para a quantidade solicitada. O método venderProduto do modelo deve retornar um valor booleano indicando o sucesso da operação.
    const sucesso = this.model.venderProduto(id, qtdVenda);


    // se a venda for bem-sucedida, atualiza a visão. Caso contrário, exibe uma mensagem de erro indicando que o estoque é insuficiente para a quantidade solicitada.
    if (sucesso) {
      this.atualizarView();
    } else {
      this.view.mostrarMensagem("Estoque insuficiente para esta quantidade!");
    }
  }

  // essa parte é o método que atualiza a visão com os dados mais recentes do modelo. Ele obtém a lista de produtos e o histórico de vendas do modelo e chama os métodos da visão para renderizá-los.
  atualizarView() {
    const produtos = this.model.obterProdutos();
    const historico = this.model.obterHistorico();

    this.view.renderizarProdutos(produtos);
    this.view.renderizarHistorico(historico);
  }
}
