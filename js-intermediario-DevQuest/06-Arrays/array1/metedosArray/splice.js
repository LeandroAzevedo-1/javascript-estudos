
let frutas = ['Bananas', 'Maçã', 'Uva', 'Laranjas',]

let frutasEstraidas = frutas.splice(1, 2)
console.log("Com o splice vamos retirar  a posição 1 e 2 ",frutasEstraidas)
/*
    Com o splice vamos retirar  a posição 1 e 2  [ 'Maçã', 'Uva' ] e cria outro array. 
    removendo  os item do array original 
    criando outro array chamada frutasExtraidas
*/

console.log('O array original ficou então com:', frutas)

/*
    O array original ficou então com: [ 'Bananas', 'Laranjas' ]
*/
