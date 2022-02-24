// Array de ordem 
let ordens = [
    { cliente: 'Leandro', tipo: 'compra', quantidade: 56, ativo:'NFLX34'},
    { cliente: 'rICARDO', tipo: 'compra', quantidade: 76, ativo:'aapl34'},
    { cliente: 'joão', tipo: 'venda', quantidade: 21, ativo:'GOGL34'}
]

let quantidadeDeOrdens = 0
for (let i = 0; i < ordens.length; i++){
    quantidadeDeOrdens += ordens[i].quantidade
}
console.log(quantidadeDeOrdens)


/*
    SOMANDO AS QUANTIDADE FEITA PELOS CLIENTES COM O LAÇO FOÇO FOR 
    VAMOS SOMAR E ATRIBUIR AO MESMO TEMPO USANDO += VAMOS SOMA A QUANTIDADE
    METEDOS REDUCE É FORMA MAIS GENERICA DE TRABALAHAR COM ARRAYS 

*/ 