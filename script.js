function Produto(nome, preco, quant){
    this.nome = nome
    this.preco = preco


    Object.defineProperty(this, 'quant', {
        enumerable: true, //mostra a chave
        value: quant, //valor da chave
        writable: false, //writable serve para dizer se pode ou nao alterar algo
        configurable: false //pergunta de pode ou nao editar a chave
    })
    
}

let p1 = new Produto ('Vasilha', 10.99, 20)

console.log(p1)