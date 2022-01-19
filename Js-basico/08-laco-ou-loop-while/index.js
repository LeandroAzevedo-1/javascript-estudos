/*  
    while que dizer enquanto (condicao){
    <bloco de execução> - Toda vez que ele for chamado, percorrido
   }
     While - laço com o teste no lógico no inicio

    exemplo 01

    let a = 10
    let b = 15

  while testa para depois executar 
    while(a < b ){
    console.log("incrementando a variável a: " + a)
    a++  --Incrementa com mais 1
    }
    Resposatas no console do navaegador 
    incrementando a variável a 10
    incrementando a variável a 11
    incrementando a variável a 12
    incrementando a variável a 13
    incrementando a variável a 14
        ele sai do laço e para de execultar   
    
     

*/
//-------------------------------------------------------------------------------------------
/*
    do while- laço com o teste lógico no final, executa o código e  depois testa 

    do{
        <bloco de execucao>
    }while(condição)
*/
let a = 10
let b = 15

var i = 1

do{
    console.log('entrou ' + i)
    i++ //incremento com mais 1 valor 
}while(i <= 5)

