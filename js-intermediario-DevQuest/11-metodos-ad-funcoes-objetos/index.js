//Criando método dentro de um objeto 
//criando um objeto = usuario
// criando valor e propriedade 
//criando método 
//usadno o this.nome para concatenar 
let usuario = {
    nome: 'Leandro',  //Propriedade chave valor

    //Criando método excluir (função anônima)
    excuir: function () {
        console.log('O usuário, ' + this.nome + ' foi excuido!')
    }                     // this consegue pegar so o valor da propriedade nome. 
}
//chamar a função, usando o método excuir que foi criado
usuario.excuir()