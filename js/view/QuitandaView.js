export class QuitandaView {
    constructor() {
        this.tabela = document.getElementById('tabelaEstoque');
    }

    renderEstoque(produtos) {
       this.tabela.innerHTML = "";

        // 2. Para cada produto, criamos uma "linha" (tr) na tabela
        produtos.forEach(p => {
            const linha = `
                <tr>
                    <td>${p.id}</td>
                    <td>${p.nome}</td>
                    <td>R$ ${p.preco}</td>
                    <td>${p.quantidade}</td>
                </tr>
            `;
            // 3. Colocamos a linha dentro da tabela no HTML
            this.tabela.innerHTML += linha;
        });
    }

    // +renderVenda()
    renderVenda(mensagem) {
        alert(mensagem); // Apenas um aviso para o usuário
    }
}