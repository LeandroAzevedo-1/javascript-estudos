
function colocarAguaPraFerver(){
    console.log('Colocar água para ferver ') 
    
    setTimeout(() => {
        console.log('água ferveu')
        passarOCafe()
    }, 5000);
}
function prepararPraPassarOCafe(){
    console.log('pegar o pó de café')
    console.log('pegar o filtro de café')
    console.log('colcoar o café no filtro')
    console.log('colocar o filtro em cima da xicara')
}

function passarOCafe(){
    console.log('passando o café')
}

prepararPraPassarOCafe()
colocarAguaPraFerver()
/* 
    Síncrono execulta todas as funções em ordem 
    se a 1 função demorar a função seguinte fica esperadno ela execultar para ela ser execulada 

    usando o setTimeout a função que está depois dela fica esperando 5 segundo para ser execultada 

    resultado 
    pegar o pó de café
     pegar o filtro de café
     colcoar o café no filtro
     colocar o filtro em cima da xicara
     Colocar água para ferver 

     espera 5 segundo para executado a função para ir para a próxima
    
    sincrono.js:6 água ferveu
    sincrono.js:18 passando o café
*/