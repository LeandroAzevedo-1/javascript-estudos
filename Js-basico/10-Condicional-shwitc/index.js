/*
    Anatomia do switch 

    switch(parâmetro- ou valor que vai ser testado ){
        case valor:
            <bloco de declaração>
            break
        case valor2:
            <bloco de declaração>
            break 
    }
    1º Exemplo 

    //Variável atribuida com o nome Homem Aranha
    let nomeFilme = 'Homem Aranha '

    //Se o nomeFilme for 
    switch(nomeFilme){
        //Caso seja Vingadores , imprime É o nome dos Vingadores 
        case 'Vingadores':
            console.log('É o filme dos Vinadores')
            break // Se for Sai do fluxo aqui
        //Caso o nomeFilme seja Batman vs Superman, Imprime É o filme do Batman vs Superman
        case 'Batman vs Superman':
            console.log('É o filme do Batman vs Superman')
            break // Se for sai do fluxo aqui
        //Caso p nome do filme seja Senhor dos Anéis, imprime É o filme Senhor dos anéis
        case 'Senhor dos Anéis':
            console.log('É o filme Senhor dos Anéis')
            break //Se for sai do fluxo 
        default: //Caso não encotre o filme 
            console.log('É outro filme')
            break//Sai do fluxo aqui 
    }

*/
/* 
    2º Exemplos 

    Criando um avaliação com switch, multicaso
     
*/
    let avaliacao = 4
    //se avaliação for
    switch(avaliacao){
        case 1: // 1
        case 2: // 2
            console.log('Avaliação ruim')//Imprime avaliação ruim
            break
        case 3: // se for 3
        case 4: // ou 4
            console.log('Avaliação mediano')//Imprime avaliação mediano
            break
        case 5: // se for 5
        case 6: // ou 6
            console.log('Filme excelente') //Imprime avaliação Filme excelent 
            break
        default: //se não for nenhuma dessas notas 
            console.log('Nota inválida') // imprime Nota inválida

    }

