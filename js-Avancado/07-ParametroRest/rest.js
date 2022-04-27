/*
    A SINTAXE DO PARÂMETRO REST 

    funtion (a,b ...args){
        ...
    }
    Criar um function e passar uma mensagem quando a função for chamada 
    - Como parâmetro criamos as variáveis (mensagem, ...nomesQuesters)
    - o Parâmetro rest, vamos passar a mesma mensagem para os questes que vamos passar na chamada da função 
    - Criar outra funtion chamada de callbacks e vamos executar o bloco de código dentro dela 
    - o map vai percorrer todo oa array e criar um novo array 
    - chamando a função e passando os valores a serem incluido nas variáveis passada como parâmetros, estamos passando como nomes mais de uma variaveis, porque no segundo parâmetro passamos o parâmetro rest que faz essa função de inclusão de valores 
    - o Parâmetro rest tem que ser sempre o último, para não da erro 

    resultado 
    Parabéns por ter chego ao módulo de javascript avançado, Leandro
    Parabéns por ter chego ao módulo de javascript avançado, Paulo
    Parabéns por ter chego ao módulo de javascript avançado, João
*/

function incentivarQuester(mensagem, ...nomesQuesters){7
    
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}
    
incentivarQuester('Parabéns por ter chego ao módulo de javascript avançado,','Leandro', 'Paulo', 'João')