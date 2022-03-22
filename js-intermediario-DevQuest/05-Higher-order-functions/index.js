/*
    Higher order functions : Funções que recebem outras funções como parâmetros ou retorna outra função. 

    Podemos passar um função como parâmetro para outra função, chamosos isso de  callback
    criamos uma função anônima 

    */
const calcularAnoDeNascimento = function(idade,mesDeNascimento,imprimir){
    const mesAtual = 2 // variável mesAtual recebe mes 2
    let anoDeNascimento = 2021 - idade 
    //variável anoDeNascimento recebe ano atual 2021 - idade
    if(mesDeNascimento > mesAtual) 
    anoDeNascimento--
    //se mesDeNascimento for maior que mesAtual anoDeNascimento - 1
    imprimir(anoDeNascimento)
    //imprimi 
}

//Criar outra função anônima somente para imprimir o anoDeNAscimento
let imprimirAnoDeNascimento = anoDeNascimento =>{
    console.log('Seu ano de nascimento é: ' + anoDeNascimento)
}

calcularAnoDeNascimento(35,11,imprimirAnoDeNascimento)
 //imprimirAnoDeNascimento, Temos que passar essa como parâmetro com outra função

// ---------------------------------------------------------------------
// 2º Exemplo, função que retorna uma função
function multiplicar(multiplicador){
    //Vamos criar uma função anônima
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(3))           //vai imprimir o dobro de 3 = 6
console.log(triplicar(3))        //Vai triplicar o número 2
console.log(quadruplicar(3))     // vai quadruplicar o número 2  


//Função simples que multiplica o dobro 
// function dobrar(numero){
//     return numero * 2
// }
// console.log(dobrar(2)) // Resultado 4