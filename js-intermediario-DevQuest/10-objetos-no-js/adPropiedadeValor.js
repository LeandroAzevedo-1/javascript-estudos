let tenis = {
//propriedade: Valor
    cor: 'Branco',
    tamanho: 42,
    emStoque:true,
    valor: 200
}
tenis.corFundo = 'azul'

console.log(tenis)
/* 
    Adicionando Propriedade e valor a um objeto que já está criado.  tenis.corFundo = 'azul'

    Quando imprimos o objeto vamos perceber que foi incuido o corFundo.

    {
        cor: 'Branco',
        tamanho: 42,
        emStoque: true,
        valor: 200,
        corFundo: 'azul'
    }
*/