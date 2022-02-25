let pessoa = {
    nome:'Leandro',
    sobrenome: 'Azevedo',
    idade: 35
}

let {nome: nome, idade: idade, sobrenome: sobrenome} =   pessoa

// console.log(nome,idade,sobrenome)
console.log(nome)
console.log(idade)
console.log(sobrenome)
/*
    USANDO A DESESTRUTURAÇÃO PARA PEGAR OS VALORES E ARMAZENAR EM VARIÁVEIS 
    1 e a propridade do objeto 
    2 e a variável do objeto 
    desse jeito conseguimos desestruturar o objeto dessa nameira 

    pode imprimir em um único console.log
    console.log(nome,idade,sobrenome)

    Ou pode mostrar os valores em console.log separados 
*/