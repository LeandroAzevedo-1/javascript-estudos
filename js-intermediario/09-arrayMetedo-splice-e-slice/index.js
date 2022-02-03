//slice sintaxe dele é 

// let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva' ]  //Array frutas

/*let frutasExtraidas = frutas.slice(1,3)

console.log(frutasExtraidas)

console.log.slice()//o array não muda a sua origem */

// Splice - Remover ou adicionar item 
// let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva' ]

// let frutasExtraidas = frutas.splice(1, 2) //remove maçã e laranja
// console.log(frutasExtraidas)

// console.log(frutas) // O array original foi alterado 


//Removendo e adicionando item do array original  
let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva' ]

let removeEAdicionaFrutas = frutas.splice(1, 2, 'Goiaba', 'Abacaxi', 'Pêra')
//remove do array , Maçã e laranja e trocamos por Goiaba abacaxi e pera 

console.log(frutas)
console.log(removeEAdicionaFrutas)



