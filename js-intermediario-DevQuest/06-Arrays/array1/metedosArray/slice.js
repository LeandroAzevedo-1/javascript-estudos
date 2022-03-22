
let frutas = ['Bananas', 'Maçã', 'Uva', 'Laranjas',]

/* let frutasExtraidas = frutas.slice(1,3)

console.log(frutasExtraidas)
*/

/*
    Vai retorna uma cópia e colocar na variável frutasExtraidas vai pegar o item do indece 1 ate o indece 2. e retorna um array 
    [ 'Maçã', 'Uva' ]
    Vai até a posição 3 mas não inclui ela !
*/

let frutasExtraidas = frutas.slice(1)

console.log(frutasExtraidas)
/*
    Nesse exemplo ela vai pegar desde da posição 1 até o final do array 
    retorna o valor [ 'Maçã', 'Uva', 'Laranjas' ]
*/

/* 
    Console.log(frutas) 
    Não muda o valor original do array 
    ['Bananas', 'Maçã', 'Uva', 'Laranjas',]

    Então o slice não retira do array original, ele faz uma cópia!
*/