var kindOf = require('kind-of');
const testeDeBooleano = true
const testeDeTexto = 'textro'
console.log(kindOf(testeDeBooleano))
console.log(kindOf(testeDeTexto))
/*
    Resultado do teste 
        boolean
        string
        
    O require so funciona na chamada no node.js,
    não funciona no navegador 
*/ 