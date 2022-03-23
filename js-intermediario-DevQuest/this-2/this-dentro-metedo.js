let usuario = {
    name: 'Leandro ',
    saudar: function(){
        console.log('this no contexto do metedo mostra', this)

        console.log('this.name no contexo do metedo', this.name)
    }
}
usuario.saudar()

/* 
    1º console.log vai imprime tudo, poque ele pega o objeto que é usuario

    this no contexto do metedo mostra { name: 'Leandro ', saudar: [Function: saudar] }
    
    2º console.log vai imprime o nome, porque passamos o this.name; 
    this.name no contexo do metedo Leandro 

    obseve que o escopo é local dentro de uma função 
*/
