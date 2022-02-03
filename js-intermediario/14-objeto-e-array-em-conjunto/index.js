
//objeto tem chave e valor

// Criando um objeto

//Duas  formulas

// 1º 
/*
let jogo1 ={
    nome:'Final fantasy'
}

let jogo2 = {
    nome:'Fallout'
}
*/
//objeto videogame
// let videogame = {
//     noem: 'X-box',
//     valor: 3000,
//     //criando objeto sem instanciar, segunda formula 
//     jogos: [
//         //criando 2 objeto jogos 
//         { nome:'Final fantasy'}, 
//         {nome:'Fallout'}
//     ]
// }

// //adicionando jogo 
// let jogo3 = {
//     nome: 'Fifa'
// }

// videogame.jogos.push(jogo3) //adicionei 
// console.log(videogame)

//Objeto dentro de outro objeto 

let cliente = {
    nome: 'Leandro ',
    //no sistema tem último pedido "objeto"
    ultimoPedido:{
        produto:'X-box',
        valor: 3000,
        //criar um array dentro do objeto
        jogos:[
            {nome: 'Fifa'}
        ]
    }
}
//buscando o nome do ultimo pedido 
//entra no objeto cliente ultimoPedido jogos indice 0 e o nome do ultimo pedido
console.log(cliente.ultimoPedido.jogos[0].nome)