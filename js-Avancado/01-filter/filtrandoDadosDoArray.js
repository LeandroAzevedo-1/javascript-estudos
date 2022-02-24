
//ARRAY DE NOME PESSOAS 
let pessoas = [
    { nome: 'Leandro', idade: 33},
    { nome: 'Ricardo', idade: 33},
    { nome: 'João ',   idade: 27}
]

/* 
    CRIANDO UM ARRAY VAZIO PARA CRIAR USANDO A  CONDIÇÃO PARA FILTRAR OS DADOS E CRIA-LO.
     DA O MESMO RESULTADO USANDO O FILTER 
*/
let pessoasComIdadeDe33Anos = []
for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i].idade === 33){
        pessoasComIdadeDe33Anos.push(pessoas[i])
        
    }
}
console.log( pessoasComIdadeDe33Anos)

/*
    RESULTADO CRIA UM NOVO ARRAY SÓ COM AS PESSOAS COM IDADE DE 33 ANOS 
    [ { nome: 'Leandro', idade: 33 }, { nome: 'Ricardo', idade: 33 } ]
*/