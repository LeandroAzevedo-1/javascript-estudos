//Arrays dentro de arrays

let fimles = [
                ['Vingadores', 4.5, true], 
                ['Mulher Maravilha', 4.6, false,['Gal Gadot', 25]]
             ]
//para mostrar 
console.table(fimles)//imprime em forma de tabela os nomes dentro do arrays
// vamos pegar primiero o 1 arrays e depois acessar as posições 
console.table(fimles[1][3][0])
