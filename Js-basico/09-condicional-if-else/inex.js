/* 
  1º condicional if = se 

  Variavel - nomeFilme receber valor Vingadores 
  let nomeFilme = 'Vingadores'

  Se nomeFilme for idêntico a Vingadores 
  Imprime É o filme dos Vingadores 

  if(nomeFilme === 'Vingadores'){
    console.log('É o filme dos Vingadores')
  }
  Ele entra no fluxo e imprime, É o filme dos Vingadores, se não for ele sai fora 
 do fluxo e não imprimi nenhuma mensagem 

  ----------------------------------------------------------------------------------------
  2º Pode usar  o if e o else juntos, else quer dizer se não.

  Variável declarada com nome Batman vs Superman
  let nomeFilme = 'Batman vs Superman' 

  Se nomeFilme for idêntico a Vingadores imprima 'É o filme dos Vingadores '
  if(nomeFilme === 'Vingadores'){
    console.log('É o filme dos Vingadores')

  se não, imprima 'É outro filme'
  }else{
    console.log('É outro filme ')
  }
  -------------------------------------------------------------------------------------
  3º Usando o else if: que dizer se for outro nome, imprimi outro console.log() 
  Usndo o else if a função torna mais especifica 

  //Variável declarada com nome Batman vs Superman
  let nomeFilme = 'Transform' 

   // Se nomeFilme for idêntico a Vingadores imprima 'É o filme dos Vingadores '
  if(nomeFilme === 'Vingadores'){
      console.log('É o filme dos Vingadores')

   // Se for o filme do Batman imprime 'É o filme do Btman vs Superman '
  }else if(nomeFilme === 'Batman vs Superman'){
      console.log('É o filme do Batman vs Superman')
  //Se for o filme Capitão América  imprime É o filme do Capitão América
  }else if(nomeFilme === 'Capitão América'){
      console.log('É o filme do Capitão América')
  //  Se não, imprime É outro filme 
  }else{
      console.log('É ouro filme ')
  }
----------------------------------------------------------------------------------------
*/

// 4º  Operador Tenario - é a formula de escrever o if e o esle em uma única linha 

// Variável com nome Vingadores 
let nomeFilme = 'Vingadores '
// condição verdadeira? ou a condicção é falsa 
true ? console.log('condição verdadeira'): console.log('condição false')
// nomeFilme é idêntico a Vingadores? imprime É o filme dos Vingadores se não imprime É outro filme 
nomeFilme === 'Vingadores' ? console.log('É o filme dos vingadores'): console.log('É outro filme')
