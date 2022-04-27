let pessoas = [
    {nome: 'Leandro', idade: 33},
    {nome: 'Ricardo', idade: 33},
    {nome: 'João',    idade: 27}
]
let nomeDasPessoas = pessoas.map((pessoas) => { //(pessoas ) é o array a ser percorrido
    return pessoas.nome + " tem " + pessoas.idade + " anos de idade "
})

console.log(nomeDasPessoas)


/* 
    O METEDO MAP CRIA UM NOVO ARRAY COM O MESMO NUMERO DE ELEMENTO. NESSE EXEMPLO CRIAMOS UM NOVO ARRAY SÓ COM OS NOMES DAS PESSOAS 

    RESULTADO:  NOVO ARRAY 

    nomeDasPessoas 
    [ 'Leandro', 'Ricardo', 'João' ]

    PODE TRABALHAR COM CONCATENAÇÃO E PEGAR A IDAE TAMBEL E CRIAR UM ARRAY MAIS DETALHADO EXEMPLO 
    [
    'Leandro tem 33 anos de idade ',
    'Ricardo tem 33 anos de idade ',
    'João tem 27 anos de idade '
    ]
    ------------------------------------------- 
    ARRAY FUNTION, FORMULA REDUZIDA | IMPRIME O MESMO RESUTLADO ACIMA 
    
    let nomeDasPessoas = pessoas.map((pessoas) => //(pessoas ) é o array a ser percorrido
    pessoas.nome + " tem " + pessoas.idade + " anos de idade ")
    console.log(nomeDasPessoas)
*/
