//Colocando objeto dentro do array, 

let videoGame ={  //criando o 1 objeto
    nome:'Xbox',
    valor: 3000
}
let videoGame2 ={ //criando o 2 obejto 
    nome:'PlayStation',
    valor: 500
}
//Criando um array videoGames e passado os objetos criados 
let videogames = [videoGame, videoGame2] //criando o array e passando os objeto dentro dele como indece 
console.log(videogames)
/*
    [ { nome: 'Xbox', valor: 3000 }, { nome: 'PlayStation', valor: 500 } ]
*/
console.log(videogames[1].nome)

/* PlayStation */

