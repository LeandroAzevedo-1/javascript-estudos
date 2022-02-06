'use strict'
// pode ter ele dentro de um escopo global ou loca, Criando outro exemplo de this, this significa isso. tem que está associado em um contexto. Ex: Desntro de uma casa quando apontamos algo dizemos isso. referenciado o que queremos mostrar 


//console.log(this) //  vai retornoar o window com seus métodos 
// console.log(window) // objeto global window
// console.log(window == this) // testando da true 

// //Escopo local com this

// this.name = 'Leandro'
// function saudar(){
//     console.log('this no contexto da função', this) // fica igual o primeiro exemplro 
//     console.log('Olá, ' + this.name) // printa o nome que está fora do escopo, apesar que o console.logo está dentro do escopo local 
// }
// //chamando a função
// saudar()

// -----------------------------------------------------------------------
// this dentro de um mtodo, criar um objeto 

// let usuario = {
//     nome:'Leandro',
//     saudar: function(){ //metedo que é uma função dentro do objeto 
//         console.log('this no contexto do metodo', this)

//         console.log('this.name no contexto do metedo', this.nome)
//         //acessando o nome 
//     }
// }
// usuario.saudar()
// ----------------------------------------------------------------------

//Criando outro exemplo de this, this significa isso. tem que está associado em um contexto. Ex: Desntro de uma casa quando apontamos algo dizemos isso. referenciado o que queremos mostrar 



let comida ={
    nome:'Brócolis',
    temperatura: 0,

    //vamos mudar a temperatura quando começar a conzinhar 
    conzinhar: function(temperaturaDeConzimento){
        //pera a temperatura pelo . e vamos aumentar
        // o this vira o objeto comida criado em cima 
        console.log('his no contexto de objeto comida', this) 
        this.temperatura = temperaturaDeConzimento;
        }
}
console.log(comida)
//passando o metedo, para mudar de temperatura 0 para 100
comida.conzinhar(100)

console.log(comida)