/* Hoisting -> isamento, comportamento que roda por baixo dos panos 

//Declaração da variável

// -----------------------------------------------------------------
// 
    var pais   //declaração 
//  pais = 'Brasil'   //atribuição ou inicialização

// pode ser na mesma linha também

//  var pais = 'Brasil' // 1º é declaração e 2 atribuição 

//toda declaração de variável é movida para o topo do escopo, seja ele
// Global ou local, o Hoisting só movel a declaração, e não a atribuição

// Exemplo 
    console.log(pais)
    var pais = 'Brasil ' //Resultado é undefined porque  tentamos imprimir a variável antes de atribuir 

// antes de atribuir, tudo isso acontecer por debaixo dos pano 
//  o que aconteceu foi . Ex: 

    var pais
    console.log(pais)
    pais = 'Brasil'
    Estão o hoisting fez esse exemplo acima por debaixo do panos 
    Jogou para cima a variável e deixou a atribuição no mesmo lugar 
*/

// ---------------------------------------------------------------------
/*
    Hoistng usando a var let

    console.log(pais)
    let pais = 'Brasil
Aqui ela muda o erro, não é possível acessar pais antes da inicialização, da um erro de referência. 

    let pais
    console.log(pais)
    pais = 'Brasil'
 Nesse caso da undefined porque, a variável está declarada. 
 mas não imprime, da um erro de inicialização. 

 Então o console.log(), sempre depois. 
*/