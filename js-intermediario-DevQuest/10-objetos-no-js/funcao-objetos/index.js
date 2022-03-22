let usuario = {
    nome: 'Leandro',
    //criado metedo para excuir 
    excluir: function(){ //Criando uma função anonima
        console.log('O usuario, ' +this.nome + ' foi excuido!')
    }
}

usuario.excluir() //invocamos a função
/* 
    Criando metedo dentro do objeto  
    1º variavel usuario -> objeto 
    2º propriedade nome: valor -> 'Leandro
    3º Criamos o metedo excuir que uma função anonima{
        5º executamos 1 uma msg, ' concatenando thi.nome chamado a propriedade nome, que é o nome que vai ser excuido
    9º chando a função usando o . quer dizer que vamos adicionar um evento, esse evento e a função excluir
    R:  O usuario, Leandro foi excuido!
    }
*/