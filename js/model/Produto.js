export class Produto{
    constructor(id, nome, preco, quant,categoria ){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quant=quant;
        this.categoria = categoria;
    }

    venda(quantvenda){
        if(quantvenda<=this.quant){
            this.quant= this.quant-quantvenda;
            return true;
        }
        else{
            console.log("Quantidade insuficiente no estoque!")
            return false;
        }
    }

    entrada(quantentrada){
        if(quantentrada>0){
            this.quant=this.quant+quantentrada;
            return true;
        }
        else{
            console.log("Não há quantidade para ser adicionada!")
            return false;
        }
    }

}
