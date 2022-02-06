//Arrays de frutas 

//imprimir todas as frutas dentro do arrays 

// length é uma propriedade do arrays, vamos acessar todos os elementos 
let frutas = ['banana', 'maçã', 'laranja', 'pêra']
let frutasTamanho = frutas.length   // o .lenght vai percorrer e imprimir todo array 

// console.log(frutasTamanho)
// enquanto i for mair que frutasTamanho imprima o nome da fruta 

// for(let i = 0; i < frutasTamanho; i++){
//     console.log('Frutas: ' + frutas[i])
// }

// -----------------------------------------------------------------

// Usando o ForEach- É um laço também  Vamos criar uma função anônima  
 frutas.forEach(function(item){
     console.log('Frutas:' + item)
 })

//  Adicionando elemento no array 

