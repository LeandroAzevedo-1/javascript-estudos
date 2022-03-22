let cliente = { //criado objeto
    nome: 'Leandro',
    ultimoPedido:{ //criando objeto ultimoPedido dentro
        produto: 'Xbox',
        valor:300,
        jogos: [ //criando array dentro do objeto 
            {
                nome:'fifa'
            }
        ]
    }
}
//Vamos imprimir na tela ou execturar o código
console.log(cliente.ultimoPedido.jogos[0].nome)
/*
    1- Entra no objeto cliente 
    2-entra no objeto tultimoPedido
    3-entra no array de jogos
    4-[0] posição do indice .nome para imprimir o nome do jogo 

    *fifa*
*/