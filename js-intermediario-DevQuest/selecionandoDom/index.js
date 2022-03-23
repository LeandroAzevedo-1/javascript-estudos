
let p = document.getElementById('paragrafo1')
console.log(p)

/*
    Formula correta de buscar um elemento no html pelo id
    .getElementById = buscar o elemento pelo ID
    ('passar o id que colocou no html')
    <p id="paragrafo1"> Paragrafo 1 </p>
    
    Metedos do documento que busca os elementos do html
    document.getElementoBuId('paragrafo1') 
    document.getElementsByClassName('tag-de-input') 
    document.getElementsByTagName('input') busca pela tag 
    
*/

let inputPorClasse = document.getElementsByClassName('tag-de-input')
console.log(inputPorClasse[1])//buscamos o 1º input
/*
    Para Busca todos os elementos que tem o nome da classe. No caso temos 2 input com a mesma classe, Vem em formado de lista.  então ele aparaceraão no console os dois 
    lembrando que vamos armazenar esse resultado dentro de uma variável que criamos.  
*/ 
let inputPorTag = document.getElementsByTagName('input')
console.log(inputPorTag)
/*
    Retorna todos elemento da mesma tag, retorna uma lista de elemento se tivar mais que tag. Para buscar o primeiro ou o segundo elemento temos que passar o indice. Podemos buscar qualquer tag 
*/

let inputPorName = document.querySelectorAll("input[name ='email']")
console.log(inputPorName)
/* 
    Busca todos elemeto da tag input com atributo name="email"
    retorna os dois input porque temos os dois input 
    buscando pelo atributo, retorna uma lista também 
*/