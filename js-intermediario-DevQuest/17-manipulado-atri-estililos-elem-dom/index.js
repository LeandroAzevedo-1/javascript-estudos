 
 //Modificando a cor de fundo do Primeiro post 
function AlterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName("post");
            //get vai buscar todos elementos da classe post
    console.log(posts)

    //buscar só o primeiro post, indece 0 é o primeiro,e mudar a cor dele 
    let primeiroPost = posts[0];
    console.log('primeiroPost', primeiroPost)
    primeiroPost.style.backgroundColor = 'red';
    //Usando o css no js style.backgroundColor = 'red' alterando a cor de fundo, pode qualquer tipo de propriedade css no js 
 }

// -----------------------------------------------------------------
            //Adicionando classe 

//  Alterando a fonte da segunda tag p 
function AumentarFonteSegundoPost(){
    //get para selecionar todos elementos 
    let textPosts = document.getElementsByClassName("texto-post");
    console.log(textPosts[1].classList)//para verificar qual poste colocar

    //Vamos adicionar a classe criada no html no head 
    //add para acionar e o nome da classe criada 
    textPosts[1].classList.toggle('fonte-grande')
    //Poderia ser o add, mas usei o toggle porque ele faz a função ADD E REMOVE AO MESMO TEMPO 
}

// ---------------------------------------------------------------
            //Modificando Atributos dos elemento HTML

    //função criada a função nos e chamar os inputs  botões 
 function marcarRadio(genero) {
     //buscar os inputs criado  no html para ter acesso a eles 
     let radioMasculino = document.getElementById('genero-masculino');

     let radioFeminino = document.getElementById('genero-feminino');

     //alterar quando clicar nos botões, vamos alterar atraves do atributo checked

        //criar uma condição
    //se genero for igua a M marcar o chcked masculino
    if(genero === 'M'){
        radioMasculino.checked = true; //ao clicar vai marcar o masculino
    }else if (genero === 'F'){
        radioFeminino.checked = true; 
    }
 }