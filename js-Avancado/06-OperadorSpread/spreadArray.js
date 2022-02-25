// Array de pessoa 
const pessoas = ['Leandro', 'Pedro', 'João']
// console.log(...pessoas)
/* 
    OPERADOR ESPREAD É ESSES TRES PONTINOS DENTRO DO CONSOLELOG console.log(...pessoas)

    Usando o operador spread, ele não imprimi o array, ele só imprimi os elementos 

    
*/ 

// CONCATENANDO CARRAYS 

let pessoa1 = ['Leandro', 'Pedro', 'João']
let pessoa2 = ['Ricardo', 'Paulo', 'Raphael']

// Criar um array novo para receber esses elementos 
pessoa1 = [...pessoa1,...pessoa2]
console.log(pessoa1)

/*
    COM SPREAD PODE CONCATENTAR VÁRIOS ARRAYS
    CRIA UM UNICO ARRAI COM OS ELEMENTOS DOS DOIS ARRAY DE CIMA 
    
    RESULTADO 

    [ 'Leandro', 'Pedro', 'João', 'Ricardo', 'Paulo', 'Raphael' ]
    MOSTRA AS POSIÇÕES JUNTOS
    0: "Leandro"
    1: "Pedro"
    2: "João"
    3: "Ricardo"
    4: "Paulo"
    5: "Raphael"
*/
