
//Adicionando um Evento 
    //querySelecotr pega a tag select o atributo name e o seu valor 
document.querySelector("select[name='estado']")
    .addEventListener('change', function (event) {
        console.log(event.target.value)
});

//event => Pega o evento disparado que foi disparado 

/*

.addEventListener('change', function (event),vamos adicionar um eento change 

1 é o nome do evento 
2 vamos fazer uma função com um parâmetro event
3 vamos fazer um console.log, chamando o parâmetro event no atributo 
4 target é o alvo, de onde o evento foi disparado, aqui foi o select
5 value é o valor que foi marcado no html, vai aparecer SP ou RJ ect

*/