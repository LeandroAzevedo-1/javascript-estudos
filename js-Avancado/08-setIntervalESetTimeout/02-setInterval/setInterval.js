setInterval(() => {
    console.log('A cada dois segundo vai imprimir')
},5000);

// Para pegar o id do intervalo e parar a execução 
/*
    const idDoIntevlo = setInterval(() => {
        console.log('A cada dois segundo vai imprimir')
    },5000);

 console.log(idDoIntevlo)
 clearInterval(idDoIntevlo)
 
    SetInterval

    o bloco de código sera executado a cada tempo que for passado 

    ele fica repetido, executando o bloco de código a cada 5D segundo.

    SE COLOCAR MAIS UM console.log('CONSOLE DE FORA DA FUNÇÃO') ELE IMPRIME TAMBÉM PRIMEIRO E FICA EXECUANDO O CÓDIGO DE DENTRO DA FUNCTION

    PARA PARAR PEGAR O ID DO INTERVALO TEMOS QUE CRIAR ESSE EXEMPLO 

    const idDoIntevlo = setInterval(() => {
    console.log('A cada dois segundo vai imprimir')
    },5000);

    console.log(idDoIntevlo)
    clearInterval(idDoIntevlo)

    resultado 
    1
*/