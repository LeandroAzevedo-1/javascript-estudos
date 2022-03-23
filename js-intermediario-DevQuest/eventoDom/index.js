
document.querySelector("select[name='estado']")
.addEventListener('change', 
function(event){ //função 
    console.log(event.target.value)
})

/*
    ADICIONANDO UM EVENTO DO TIPO CHANGE E BUSCAR O VALOR PASSADO NO HTML 

    1 Vamos buscar o select através do atributo
    2 vamos criar uma FUNÇÃO para ADICIONAR  um evento de CHANGE!  

    3 pegar o value que o usuário selecionou vamos usar um parâmentro(event) dentro da função, quando executar o bloco vamos conseguit pegar o valor usando console.log(event.target.value)


    tipos de eventos
    change | click 
    Para adicionar um evento addEventListener('change'
*/