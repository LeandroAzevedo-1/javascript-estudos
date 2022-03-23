// MODIFICANDO OS ESTILOS CSS DOS ELEMENTOS HTML

function AlterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post')
    /* Busca todos os  elemento pela classe post */
    let primieroPost = posts[0]; 
    // pegar só a 1 parágrafos
    primieroPost.style.backgroundColor = 'red';
    //Mudamos a cor do primeiro p para red - estilizando  css no js
}

/*
    1º Função para alterar a cor de fundo do primmeiro parágrafo
    2º buscar o elemento para alterar:let posts = document.getElementsByClassName('post'), busca pela classe 
*/
        
function AumentarFonteSegundoPost(){
    let aumetarFonte = document.getElementsByClassName('texto-post')
/* 
    Pega a classe do html, busca todos os elementos que tem essa class
*/ 
    aumetarFonte[1].classList.add('fonte-grande') 
}
/*  
    Adicionando a classe criada no css para estilizar o segundo elemento do html - ao clicar no botão Aumetar a fonte vai chamar a função e a função vai adicionar a classe criada no css
    .classList da acesso a todas as classes chamada 

    Pega o 2 paragrago | classList da acesso a todas as classes do elemento vamos coloca o add para adicionar e o nome da classe criada no css
    link:
    🔗 DOM style object: https://www.w3schools.com/jsref/dom_obj_style.asp

    🔗Estilos e atributos do DOM: https://javascript.info/dom-attributes-and-properties
*/
