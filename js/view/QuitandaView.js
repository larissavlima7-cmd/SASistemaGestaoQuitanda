// js/view/QuitandaView.js

export class QuitandaView {
  constructor() {
    this.tabelaCorpo = document.getElementById("corpo-tabela");
    this.corpoHistorico = document.getElementById("corpo-historico"); // Novo
    this.formProduto = document.getElementById("form-produto");
  }

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

  // NOVA FUNÇÃO: Desenha a tabela de histórico
  renderizarHistorico(historico) {
    this.corpoHistorico.innerHTML = "";

    historico.forEach((item) => {
      const classeTipo =
        item.tipo === "Entrada" ? "badge-entrada" : "badge-saida";

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

  bindVenderProduto(handler) {
    this.tabelaCorpo.addEventListener("click", (event) => {
      if (event.target.classList.contains("btn-venda")) {
        const id = parseInt(event.target.getAttribute("data-id"));
        // Captura a quantidade que o utilizador escolheu no input
        const inputQtd = document.getElementById(`qtd-${id}`);
        const qtdVenda = parseInt(inputQtd.value, 10);

        handler(id, qtdVenda);
      }
    });
  }

  mostrarMensagem(mensagem) {
    alert(mensagem);
  }
}
