export class QuitandaView {
    constructor() {
        this.tabela = document.getElementById('tabelaEstoque');
        this.elementoMensagem = document.getElementById('mensagemQuitanda');
    }

    renderEstoque(produtos, vender) {
        
        this.tabela.innerHTML = "";

        
        produtos.forEach(p => {
            
            const linha = document.createElement("tr");

            
            const tdId = document.createElement("td");
            tdId.textContent = p.id;

            const tdNome = document.createElement("td");
            tdNome.textContent = p.nome;

            const tdPreco = document.createElement("td");
            tdPreco.textContent = `R$ ${p.preco}`;

            const tdQtd = document.createElement("td");
            tdQtd.textContent = p.quantidade;

          
            const tdAcoes = document.createElement("td");
            const btnVender = document.createElement("button");
            btnVender.textContent = "Vender";
            
        
            btnVender.addEventListener("click", () => vender(p, 1)); 

            tdAcoes.appendChild(btnVender);

            //linhas dentro da tabela
            linha.appendChild(tdId);
            linha.appendChild(tdNome);
            linha.appendChild(tdPreco);
            linha.appendChild(tdQtd);
            linha.appendChild(tdAcoes);

            this.tabela.appendChild(linha);
        });
    }
    renderVenda(texto) {
        this.elementoMensagem.textContent = texto;
    }
}
