/*
    A SINTAXE DO PARÂMETRO REST 

    funtion (a,b ...args){
        ...
    }
    
    Criar um function e passar uma mensagem quando a função for chamada 
    - Como parâmetro criamos as variáveis (mensagem, nomeQuester)
    - passado as variáveis para o bloco de execução concatenando console.log(`${mensagem} ${nomeQuester}`)
    - chamando a função e passando os valores a serem incluido nas variáveis 
*/

function incentivarQuester(mensagem, nomeQuester){
    console.log(`${mensagem} ${nomeQuester}`)
}

incentivarQuester('Parabéns por ter chego ao módulo de javascript avançado,','Leandro')