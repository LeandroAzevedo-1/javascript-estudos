/*  

    Função é criar um escopo para rodar um código ou um bloco de código

    função é um bloco de código que recebe ou não parâmetro

    function nomeDaFuncao(){
        <bloco de execução>
    }
    nomeDaFuncao() - para a função ser executada 

    // Função com parâmetro 
    function nomeDaFuncao(parametro1, paramentro2, etc...){
        <bloco de execução>
    }
    nomeDaFuncao(paramentro1, paramentro2 ect.....) - para a função ser executada ou chamando a função 
 

    // 1º Função 
    function incentivarQuester(){
        //Mensagem 
        alert('Muito bem, você chegou ao js, continue assim!!')
    }
    //Executando o bloco, ou chamando a função 
    incentivarQuester()
    -----------------------------------------------------------------------------------------

    // 2º Função com parâmetro - Somando 7

    function soma(numero1,numero2){
        console.log(numero1 + numero2)
    }
    //Executando o parâmetro1 = 1 e o parâmetro2= 3 Printa 1 + 3 = 4 
    soma(1, 3 )

    ------------------------------------------------------------------------------------------
    // 3º Atribuindo o resultado de uma função a uma variável 
    
    // Função com parâmetro, return, somando o resultado e guardando em uma variável 

    function soma(numero1,numero2){
        return numero1 + numero2 //Está executando 
    }

    let resultadoDaSoma = soma(1, 3 )
        console.log(resultadoDaSoma)//4

    //Somando o resultaDaSoma e incrementando mais 10
    resultadoDaSoma = soma(resultadoDaSoma, 10) // + 10 

    console.log(resultadoDaSoma ) // 14 incrementou o número 10 e somou com resultado 4 
    ------------------------------------------------------------------------------------------

    // Definindo valores caso não coloco nenhum valores no parâmetro , Concatenando, na hora de chamar a função

    function incentivarQuester(nomeQuester){
        //Mensagem de alerta e concatenando
        alert('Muito bem ' + nomeQuester + ',você chegou ao js, continue assim!!')
    }
    //Executando o bloco 
    incentivarQuester('Roberto')

*/
// Definindo valores caso não coloco nenhum valores no parâmetro , Concatenando
function incentivarQuester(nomeQuester = 'Quester'){
    //Mensagem de alerta e concatenando
    alert('Muito bem ' + nomeQuester + ',você chegou ao js, continue assim!!')
}
//Executando a bloco 
incentivarQuester()//Se não passar o valor, ele vai usar o Quester 