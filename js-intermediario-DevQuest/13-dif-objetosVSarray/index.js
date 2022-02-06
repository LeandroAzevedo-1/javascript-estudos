

// Array é criado abrindo e fechado [], funciona como lista 
let frutas = ['uva', 'banana', 'melão']  

//Objeto é criado abrindo e fechado {}
let videogame = {
    nome: 'xbox',
    valor: 3000
}

let videograme2 ={
    nome: 'playstation',
    valor: 5000
}

//Criando o objeto videogame com array
let videogames = [videogame, videograme2]

console.log(videogames)
//pegamendo o nome do videogame2, indice 1, propriedadee nome.
console.log(videogames[1].nome)