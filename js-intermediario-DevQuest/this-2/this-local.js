'use strict' //Temos que usar para quando chamar o this dentro do escopo local ele funcionar corretamente 

this.name = 'Leandro'

//função
function saudar(){
    console.log('Olá ', + this.name)
}
saudar()
/* 
    Então com use strict o this não pode ler uma propriedade fora do escopo da erro.

    ele não imprime o nome ! 

    E interessante usar use strict pode resolver algo de escopo 
*/