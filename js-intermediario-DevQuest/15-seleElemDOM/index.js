//Manipulando DOM

// console.log(document) // busca toda estrutua no console html 

// //buscando o paragrafo 1 

// //document,buscar o elemento pelo id 'paragrafo1' que está no html

// //colocando em uma variável

// let p = document.getElementById('paragrafo1')

// console.log(p)
// -----------------------------------------------------------------
//Outro metedo para buscar elemento 

// let inputsPorClass = document.getElementsByClassName('tag-de-input')

// //console log na variavel criada 
// console.log(inputsPorClass)
// ------------------------------------------------------------------------

//Buscando elemento por tag 
// Pode buscar todos h1 ou todos p
// let inputportag = document.getElementsByTagName('input');

// console.log(inputportag)
//------------------------------------------------------------------
//Buscando todo input de atributo name email 
let inputPorName = document.querySelectorAll("input[name='email']");

console.log(inputPorName)


