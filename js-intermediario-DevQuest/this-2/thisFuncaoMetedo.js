let comida = {
    nome: 'Brócolis',
    temperatura: 0,
    conzinhar:function(temperaturaDeCozimento){
        console.log('this no cotexto do objeto', this)
    /*
        this no cotexto do objeto { nome: 'Brócolis', temperatura: 0, conzinhar: [Function: conzinhar] }
    */
        this.temperatura = temperaturaDeCozimento;
    }
}

console.log('O objeto comida é: ', comida)
/* 
    O objeto comida é:  { nome: 'Brócolis', temperatura: 0, conzinhar: [Function: conzinhar] }
*/
comida.conzinhar(100) 
/* 
    chamando a função para executar o bloco dentro da função 

    ENTÃO QUANTO IMPRIMOS OBTEMOS O VALOR 
    this no cotexto do objeto { nome: 'Brócolis', temperatura: 0, conzinhar: [Function: conzinhar] }
    APARECE O OBJETO E DEPOIS O METEDO CONZINHAR COM A FUNÇÃO 

*/