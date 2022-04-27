/*
    Promises tem 4 esdadoa

    * Pendente, A promises não foi execultada ainda 

    * Realizada,-Resolve/ muda o estado das promes - quando teve sucesso na execulsão

    * Recusada, -Reject/muda o esdado da promese- quando teve alguma falha na execulsão

    * Estabelecida, quando foi realizada ou recusada 

    Promese é uma class no js  escreve com  a primeira letra maiuscula 
    ela vai receber uma função dentro dela. 
    -Dentro da function, (resolve, reject ) esses parâmetros são funções 
    
    -sintaxe de uma promese
    new Promise((resolve, reject )=>{
    
    })
*/
let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

let ferverAgua = () => {
    return new Promise((resolve, reject )=>{
        if(chaleiraEstaNoFogao && fogaoEstaLigado){ //verdadeiro verdeiro entra no resovle 
            console.log('Começando o processo de ferver água')
            resolve()
        }else{
            // se let fogaoEstaLigado for false ele entra nesse fluxo
            console.log('É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água ')
            reject()
        }
    })
}
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('Fazendo café')