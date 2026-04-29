//tivemos mais dificuladade
export class QuitandaModel {
    constructor() {
        this.produtos = []; 
        this.movimentacoes = [];
    }

    addProduto(novoProduto) {
        this.produtos.push(novoProduto);
        this.registrarMovimentacao(novoProduto.nome, 'Entrada', novoProduto.quantidade);
    }

    sellProduto(produtoAlvo, quantidadeParaVender) {
        const vendeuComSucesso = produtoAlvo.venda(quantidadeParaVender);
        
        if (vendeuComSucesso) {
            this.registrarMovimentacao(produtoAlvo.nome, 'Saída', quantidadeParaVender);
            return true;
        }
        
        return false;
    }

    registrarMovimentacao(nome, tipo, qtd) {
        const registro = {
            data: new Date().toLocaleString(),
            nomeProduto: nome,
            tipo: tipo,
            quantidade: qtd
        };
        this.movimentacoes.push(registro);
    }
}