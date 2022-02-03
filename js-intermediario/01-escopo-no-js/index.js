/*

Esse forma Não utiliza escopo. Vai imprimir a variável olá no console

const mensagem = "olá"
console.log(mensagem)

*/

/* 

Declarando variável dentro do escopo, o colsole.log tem que ser dentro do escopo também para imiprimir o valor da variável 
- Se colocar o console.log fora do escopo, ela da um erro


if(true){
    const mensagem = 'olá'
    console.log(mensagem) // o escopo fica dentro dela 
}
console.log(mensagem) //Esse da um erro de referência, porque não existe.

*/
// -----------------------------------------------------------------
/*
Escopo de Bloco de código autonomo, usando a variável const e let o console.lo tem que ser dentro do escopo, mas se usar a variável var, pode fazer o console.log fora do escopo que ele imprimi normal
// Ex 01 variar const, se colocar a let aconte mesma coisa
{
    const mensagem = 'olá'
    console.log(mensagem)
}
console.log(mensagem)

//Ex 2 usando a variável var, imprime tanto fora quanto dentro 
{
    var mensagem = 'olá'
    console.log(mensagem)
}
console.log(mensagem)

*/
// ----------------------------------------------------------------


/*  Escopo de Função, pode colocar qualquer um, Var, let, const que imprime fora do escopo, quando chama a função, se fizer o console.log fora ela não imprime 

function falar(){
    var  mensagem = 'Olá Mundo'
    console.log(mensagem)//imprime- porque está chamando a função 
}
falar() //chamando a função
console.log(mensagem) // Não funciona porque está fora do escopo

*/

// -----------------------------------------------------------------

/* Função dentro de função, ela fica também presa dentro do escopo
function falar (){
    const mensagem = "Olá Mundo"
    console.log(mensagem)
    //criando outra função dentro do escopo da 1 função
    function falarOutracoisa(){

    }
    falarOutracoisa()
    console.log(falarOutracoisa)
}

falar() //imprimi normal 
// console.log(mensagem) //da erro
console.log(falarOutracoisa) //da erro, imprime a formato da função
*/

// -----------------------------------------------------------------

// Escopo global , Criada no html, pode ser acessivel de qualquer lugar, vamos acessar ele aqui no js 
console.log(url)

//Pode criar uma variavel fora da função, e ela pode ser acessada tanto dentro da função quanto fora da função
