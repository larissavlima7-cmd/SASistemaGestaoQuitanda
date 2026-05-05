// js/view/QuitandaView.js

export class QuitandaView {
  constructor() {
    this.tabelaCorpo = document.getElementById("corpo-tabela");
    this.corpoHistorico = document.getElementById("corpo-historico"); // Novo
    this.formProduto = document.getElementById("form-produto");
  }

  // aqui é o método para renderizar a lista de produtos. Ele percorre a lista de produtos e cria uma linha na tabela para cada um, exibindo o nome, preço, quantidade e um botão para vender. Se a quantidade do produto for menor que 5, ele adiciona uma classe CSS para destacar o estoque baixo.
  renderizarProdutos(produtos) {
    this.tabelaCorpo.innerHTML = "";

    produtos.forEach((produto) => {
      const classeEstoque = produto.quantidade < 5 ? "estoque-baixo" : "";

      const linha = document.createElement("tr");
      linha.innerHTML = `
                <td>${produto.nome}</td>
                <td>R$ ${produto.preco.toFixed(2)}</td>
                <td><span class="${classeEstoque}">${produto.quantidade}</span></td>
                <td>
                    <div class="acoes-venda">
                        <input type="number" min="1" max="${produto.quantidade}" value="1" class="input-qtd-venda" id="qtd-${produto.id}">
                        <button class="btn-venda" data-id="${produto.id}">Vender</button>
                    </div>
                </td>
            `;
      this.tabelaCorpo.appendChild(linha);
    });
  }

  //essa função é para renderizar o histórico de vendas. Ela percorre a lista de transações e cria uma linha na tabela para cada uma, exibindo a data/hora, tipo (entrada ou saída), nome do produto e quantidade. O tipo é destacado com uma classe CSS diferente para facilitar a visualização.
  renderizarHistorico(historico) {
    this.corpoHistorico.innerHTML = "";

    historico.forEach((item) => {
      const classeTipo =
        item.tipo === "Entrada" ? "badge-entrada" : "badge-saida";

      // aqui é para criar a linha da tabela para cada transação no histórico, usando as informações de data/hora, tipo, nome do produto e quantidade. O tipo é destacado com uma classe CSS diferente para facilitar a visualização.
      const linha = document.createElement("tr");
      linha.innerHTML = `
                <td>${item.dataHora}</td>
                <td><span class="${classeTipo}">${item.tipo}</span></td>
                <td>${item.produtoNome}</td>
                <td>${item.quantidade} un.</td>
            `;
      this.corpoHistorico.appendChild(linha);
    });
  }

  // essa parte é o método que liga os eventos da interface com os manipuladores definidos no controlador. Ele adiciona um listener para o formulário de adição de produtos, capturando os dados inseridos pelo usuário e chamando o manipulador correspondente no controlador. Também adiciona um listener para os botões de venda na tabela de produtos, capturando o ID do produto e a quantidade a ser vendida, e chamando o manipulador correspondente no controlador.
  bindAdicionarProduto(handler) {
    this.formProduto.addEventListener("submit", (event) => {
      event.preventDefault();
      const nome = document.getElementById("nome").value;
      const preco = document.getElementById("preco").value;
      const quantidade = document.getElementById("quantidade").value;

      handler(nome, preco, quantidade);
      this.formProduto.reset();
    });
  }

  // essa parte é para a gente capturar o evento de clique no botão de venda, obter o ID do produto e a quantidade a ser vendida, e chamar o manipulador correspondente no controlador. Ele verifica se o elemento clicado é um botão de venda, captura o ID do produto a partir do atributo data-id do botão, e captura a quantidade a partir do input associado ao produto. Em seguida, chama o manipulador passando o ID e a quantidade para processar a venda.
  bindVenderProduto(handler) {
    this.tabelaCorpo.addEventListener("click", (event) => {
      if (event.target.classList.contains("btn-venda")) {
        const id = parseInt(event.target.getAttribute("data-id"));
        // Captura a quantidade que o utilizador escolheu no input
        const inputQtd = document.getElementById(`qtd-${id}`);
        const qtdVenda = parseInt(inputQtd.value, 10);

        handler(id, qtdVenda); // o handler serve para chamar o método do controlador que processa a venda, passando o ID do produto e a quantidade a ser vendida.
      }
    });
  }

  mostrarMensagem(mensagem) {
    alert(mensagem);
  }
}
