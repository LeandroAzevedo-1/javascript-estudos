function marcarRadio(genero){
    // console.log(g)
    let radioMasculino = document.getElementById('genero-masculino')
    /* Pegar o radio masculino */
    let radioFeminino = document.getElementById('genero-feminino')
    /* Pega o radio feminino */

    /* Condição */
    if(genero == 'M') {
        radioMasculino.checked = true
    }else if(genero == 'F'){
        radioFeminino.checked = true
    }
}

/* 
    1º Criar a função para pegar os botões com o nome do onclick e vamos passar o parâmetro genero.

    2º Qual elemento quero alter? 
    let radioMasculino = document.getElementById('genero-masculino')

    let radioFeminino = document.getElementById('genero-feminino')
    acessando os dois radios 

    3º Alterar o atributos desses radio ou marcar .
    Vamos criar uma condição para fazer essa alteração quando clicar no botão 
    O metedo checked vamos usar para marcar quando clicar no botão 

    Se um dia tivesse outro radio que não fosse M nem F ele ainda sim marcaria o F, por isso  as vezes é bom ser bem específico no condicional

    link : 
    🔗 DOM style object: https://www.w3schools.com/jsref/dom_obj_style.asp

    🔗Estilos e atributos do DOM: https://javascript.info/dom-attributes-and-properties

*/