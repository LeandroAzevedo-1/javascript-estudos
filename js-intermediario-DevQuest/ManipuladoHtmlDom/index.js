
function adicionarComentario() {
    //Busca o input 
    let inputComentario = document.getElementsByName('novo-comentario')

    let textoDigitado = inputComentario[0].value; //Pega o texto digitado
    
    let novoComentario = document.getElementById('novos-comentarios')
    /*pega o elemento do id criado no html para inserir o que o usuário vai digitar */

    novoComentario.innerHTML += `<h3>Novo cometários: ${textoDigitado}</h3>
    <p> Obrigado por comentar</p>
    `

    /*Adicionar texto digitado no proprio site */
}
/* 
    1º vamos criar uma função que vai adicioanr esse elemento

    2º vamos buscar o valor que o usuário digitou. usando o atributo para pegar a tag input -> 
    let inputComentario = document.getElementsByClassName('novo-comentario') -> quando digitar algo dentro do input e clicakr no botão para enviar, ele vai aparecer no console que foi clicado e o input também. 

    3º Vamos pegar o valor do 1 input que o usuário diigitou : 
    let textoDigitado = inputComentario[0].value;
    value é o que o usuário digitou - esse valor pode ser enviado para um banco de dados 

    4º Buscar o elemento que queremos inseri o que o usuario digitar:
    let novoComentario = document.getElementById('novos-comentarios')

    5º inserir o texto que o usuário digitar no site e incuir nele :
    novoComentario.innerHTML = `<p>Novo cometário: ${textoDigitado}</p>`
    a propriedade innerHTML -> inclui esse texto, vamos atribui um parágrafo e concatenar com a variável textoDigitado pegou otexto digitado e incuiu no html pelo innerHTML
    += Vamos adicionar todos os cometários que serão digitados 

    *
        Mais sobre a proprieda innerHTML: https://www.w3schools.com/jsref/prop_html_innerhtml.asp 
    *
*/