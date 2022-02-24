//Array
let pessoas = [
    {nome: 'Leandro', idade: 33},
    {nome: 'Ricardo', idade: 33},
    {nome: 'João',    idade: 27}
]

let nomeDasPessoas = []
for (let i = 0; i < pessoas.length; i++){
    nomeDasPessoas.push(pessoas[1].nome)
}
console.log(nomeDasPessoas)

/*
    Cria um novo array, só com os nomes de cada pessoa 
    percorre todo o array e imprime todos os nome 
    PUS É PARA É UM METEDO QUE INCREMENTA, VAMOS INCREMETAR CADA NOME EXTRAIDO DENTRO DO NOVO ARRAY 

    RESULTADO 
    [ 'Ricardo', 'Ricardo', 'Ricardo' ] 
    IMPRIMIU ESSE NOVO ARRAY E COLOCOU DENTRO DA VARIÁVEL CRIADA NOMEDASPESSOAS 
*/ 