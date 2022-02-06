// let valorBoleto = 100 ;

// console.log(valorBoleto) //correto 

// console(valorBolet) //o erro

let inputTelefone = document.getElementById('telefone');

//Input telefone alterando o atribudo, desabled é desabilitado
inputTelefone.disabled = true;
//Criar um botão para habilitar, criar uma função
function habilitarTelefone() {
    let inputTelefone = document.getElementById('telefone');
    inputTelefone.disabled= false; //Quando clico no botão telefone, consigo habilitar para escrever 
}
