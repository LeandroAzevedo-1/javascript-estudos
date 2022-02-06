
/* Higher order functions : Funções que recebem outras funções como parâmetros ou retorna outra função. 

Esse Exemplo, vamos tirar alguns elementos para 
criar a arrows functions, é uma função de forma eduzida
*/
let resultadoDaSoma = function(numero1, numero2){
    return numero1 + numero2
}
console.log(resultadoDaSoma(12,5))

*/
// troca; funtions pela =>  essa seta é a arrows  functions

// let resultadoDaSoma = (numero1, numero2) =>{
//     return numero1 + numero2
// }
// console.log(resultadoDaSoma(12,5))

// ---------------------------------------------------------------------
//Pode simplificar mais a função 

// const incentivarQuester = nomeQuester =>{
//     console.log('Parabéns ' + nomeQuester + ', Você chegou ao módulo js intermediario')
// }
// incentivarQuester('Leandro') //entre parâmetro passa o nome o quester

// -------------------------------------------------------------------
//Pode reduzido  mais o código, o código fica bem 
let resultadoDaSoma = (numero1, numero2) => numero1 + numero2

console.log(resultadoDaSoma(12,5))


