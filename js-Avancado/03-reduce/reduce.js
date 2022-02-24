let ordens = [
    { cliente: 'Leandro', tipo: 'compra', quantidade: 56, ativo:'NFLX34'},
    { cliente: 'rICARDO', tipo: 'compra', quantidade: 76, ativo:'aapl34'},
    { cliente: 'joão', tipo: 'venda', quantidade: 21, ativo:'GOGL34'}
]

// FORMULA ARRAYS Function
let quantidadeDeOrdens  = ordens.reduce((somaDasOrdens, ordem) =>
     somaDasOrdens + ordem.quantidade, 0)

console.log(quantidadeDeOrdens)


/*
    REDUCE É DIFERENTE DO FILTER E DO MAP
    quandidadeDeOrdens começa com 0 }, 0) como foi passado embaixo.
    somando com a quandidade da ordem corrente, pega a primeira e soma ate a ultima 
    como se fosse um laço. 

    resultado 
    153 somou todos os item 

    FORMULA DE FUNÇÃO NORMAL 

    let quantidadeDeOrdens  = ordens.reduce(function(somaDasOrdens, ordem){
    return somaDasOrdens + ordem.quantidade
    }, 0)

    console.log(quantidadeDeOrdens)

*/ 