// js/models/QuitandaModel.js

export class QuitandaModel {
    constructor() {
        // RF-03: Aqui é a nossa "gaveta" de produtos
        this.produtos = []; 
        
        // RF-05: Aqui é o nosso "caderninho" de histórico
        this.movimentacoes = [];
    }

    // +addProduto(Produto) -> Atende o Diagrama e o RF-01
    addProduto(novoProduto) {
        // 1. Guardamos o produto na gaveta
        this.produtos.push(novoProduto);
        
        // 2. RN-04: Temos que anotar que ele entrou!
        this.registrarMovimentacao(novoProduto.nome, 'Entrada', novoProduto.quantidade);
    }

    // +sellProduto(Produto, quant) -> Atende o Diagrama e o RF-04
    sellProduto(produtoAlvo, quantidadeParaVender) {
        // 1. Pedimos para o objeto Produto tentar se vender (diminuir o estoque dele)
        const vendeuComSucesso = produtoAlvo.venda(quantidadeParaVender);
        
        // 2. Se ele conseguiu vender (tinha estoque), anotamos no caderninho
        if (vendeuComSucesso) {
            this.registrarMovimentacao(produtoAlvo.nome, 'Saída', quantidadeParaVender);
            return true;
        }
        
        return false; // Não vendeu (estoque insuficiente)
    }

    // Método para o Histórico (RF-05)
    // Este método é quem "escreve" no caderninho de movimentações
    registrarMovimentacao(nome, tipo, qtd) {
        const registro = {
            data: new Date().toLocaleString(),
            nomeProduto: nome,
            tipo: tipo, // 'Entrada' ou 'Saída'
            quantidade: qtd
        };
        this.movimentacoes.push(registro);
    }
}