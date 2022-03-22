/* 
    E bem usado no mundo real usar Array e Objeto em Conjunto  
*/
let jogo1 = {
    nome: 'Final fantasy'
}
let jogo2 = {
    nome: 'Fallout'
}
let videoGame ={  //criando o 1 objeto
    nome:'Xbox',
    valor: 3000,
    jogos: [jogo1, jogo2]
}

//Adicionando um novo jogo 
let jogo3 = {
    nome: 'Fifa'
}
videoGame.jogos.push('jogos3')
/* 
    Acessando o objeto .jogo e a propriedade que vamos acessar com . e o metedo push vai incluir e vamos passar o nome do jogo que criamos entre aspas dentro do parentes
 */
