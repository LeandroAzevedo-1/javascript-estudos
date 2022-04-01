const toggle = document.getElementById('toggle') /*Pega o id criado eno html e coloca na variável*/

toggle.onclick = function(){ /* função de evento clica que embaixo vai adicionar uma classe quando clicar  */
    toggle.classList.toggle('active'); /* Adicionando uma classe, quando clicar ela é incluida  */
}