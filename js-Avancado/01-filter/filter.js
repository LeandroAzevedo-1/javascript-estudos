/*
    FILTRANDO DADOS USANDO O METEDO FILTER

    Filter é uma função no js que recebe outra função como parâmetro, essa função vai ser usada para filtar elemento do array.

    FILTER FAZ O LAÇO PARA PERCORRER TODO ARRAY, NÃO PRECISA FAZER O FOR   

*/
//ARRAY DE NOME PESSOAS 
let pessoas = [
    { nome: 'Leandro', idade: 33},
    { nome: 'Ricardo', idade: 33},
    { nome: 'João ',   idade: 27}
]
let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoas){//parâmetro é o ob a percorrer
    return pessoas.idade === 33 

})
console.log(pessoasComIdadeDe33Anos)

/*
    Se for verdadeiro vai filtar e filtrar passa e testa as outras pessoas se não estiver 33 ele não imprime

    RESULTADO, IMPRIME TODAS AS PESSOAS COM 33 E CRIA OUTRO ARRAY QUE É 

    [ { nome: 'Leandro', idade: 33 }, { nome: 'Ricardo', idade: 33 } ]
    ------------------------------------------------------------
    FORMULA REDUZIDA ARRAY FUNTION - DA O MESMO RESULTADO QUE O DE CIMA E MENOS CÓDIGO 

    let pessoasComIdadeDe33Anos = pessoas.filter((pessoas) => 
    pessoas.idade === 33)
    
    console.log(pessoasComIdadeDe33Anos)
*/