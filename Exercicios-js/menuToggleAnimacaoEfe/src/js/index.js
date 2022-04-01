const toggle = document.getElementById('toggle') /*Pega o id criado eno html e coloca na variável*/
const menu  = document.getElementById('menu')

/* função de evento clica que embaixo vai adicionar uma classe quando clicar  */
toggle.onclick = function(){ 

/* Adicionando uma classe, quando clicar ela é incluida  */
    toggle.classList.toggle('active'); 
/** Adiciona a classe abreEfecha menu normal quando clicar no menu hamburguer  */
    menu.classList.toggle('abreEfecha') 
}