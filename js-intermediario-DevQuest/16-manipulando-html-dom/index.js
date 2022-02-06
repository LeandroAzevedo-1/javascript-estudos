//Criando a função 
//Pegar o que o usuário digitou na tela e adicionar na área embaixo //////como poste, como html criado no js
function adicionarComentario() {
    //pegando vários valores 
    let inputComentario = document.getElementsByName('novo-comentario');
    //pegar so o elemento desejado, como é um array vamos fazer o seg
    let textoDigitado = inputComentario[0].value;
    //acessando o valor que o usuário digitou com value passado

    //pegar o texto que o usuário digitou e colcoar nessa div 
    let novosComentarios = document.getElementById('novos-comentarios');

    //vamos usar innerHTML para inserir esse texto nessa div. 
    //innerHTML => É o html interno desse  dessa div. 
            //O += Vai adcionar um cometário toda vez que usuário digitar 
    novosComentarios.innerHTML   += `<p> Novo Comentário: ${textoDigitado}</p>`

    // "<p> Novo Comentário: </p>" Dessa Forma Aparece o Novo Comentário // digitado, o innerHTML irá incrementar o parágrafo

    // Pode também comcatenar o texto intero, com o texto que o usuário // digitar `<p> Novo Comentário: ${textoDigitado}</p>`

    //Pega o comentário e adicionar o tag p no html e incui comentário ////sem retirar o primeiro digitado 


}