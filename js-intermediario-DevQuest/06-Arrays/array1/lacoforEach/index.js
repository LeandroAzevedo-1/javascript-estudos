let frutas = ['Bananas', 'Maçã', 'Uva', 'Laranjas']

frutas.forEach(function(item){
    console.log('Frutas: ' + item )
})
/*
    Variável frutas recebe o array com os nomes das frutas.
    O laço forEach percorre todo o array com a função e imprime o item do array 

   R:   Frutas: Bananas
        Frutas: Maçã
        Frutas: Uva
        Frutas: Laranjas
*/
frutas.forEach(function(item, array){
    console.log('Frutas: ' + item , + array)
})
/* 
    2º formula passando o parâmetro array, ele vai imprimir o indece de cada item do array 

    Frutas: Bananas 0
    Frutas: Maçã 1
    Frutas: Uva 2
    Frutas: Laranjas 3
*/