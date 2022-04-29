/**
    map gera um novo array, ele também retorna o dobro do valor original 
    Pode ser passado 1 ou ate 3 parâmetro, item, index, array 
*/
/*
const numbers = [1, 2, 3]

const doubleNumbers = numbers.map(item => {
    return item * 2
})
// Comprovando se doubleNumber é um novo array
console.log(numbers === doubleNumbers) //imprime false

console.log(numbers, doubleNumbers) //imprime os dois array

*/
// ------------ Array de prices --------------------------
/*
const prices = [20, 10, 30, 25, 15, 40, 80, 5]

const salePrices = prices.map(prices => {
    return prices / 2
})
console.log(salePrices)
*/

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(product => {
    if (product.price >= 30){
        return {
            name:product.name,
            price:product.price / 2
        }
    }
})
/* 
    Fiz um novo array passado apenas os produtos com o preço >= 30
    Caso contrário não entra no if 
 */
console.log(saleProducts)