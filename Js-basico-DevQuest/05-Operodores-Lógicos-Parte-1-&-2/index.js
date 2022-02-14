
/* Operadores lógicos server para validar dados ou verficar condições 

   Representa o verdadeiro ou falso 

 
   == ----Igual ----- a == b -- Verdadeiro se a for igual a b
   === ---idêntico --- a===b---- verdadeiro se a for idêntico a b 
   !== ---Não idêntico - a!==b -- verdadeiro se o não for idêntico a b
   != ----Diferente ---- a!=b -----verdadeiro se o a for diferente a b 
   < -----menor que -----a < b ----Verdadeiro quando a for menor que b
   <=-----menor ou igual que--- a <= b-- verdadeiro se o form menor ou a b 
   > -----maior que --------a > b ---- verdadeiro se a for maior que b
   >=-----maior ou igual  A>=b ---- verdaeiro se a form maior ou igual a b 


  const a = 3
  const b = "3"  // Se colocar "3" como string, ele retorna vaerdadeiro, porque o js e tipagem fraca
  console.log(a==b)
  console.log(a===b)
  console.log(a!==b) // Comparar, válidar se é diferente, !Não identico, mas se os números forem iguais 
  ele aparecer como false, porque a pergunta e Esse dois não são identico ?

    < Menor que, a e menor que b? vai ser false, porque a é igual a b 
   Se o a 1 ele aparecer verdadeiro 
 
  const a = 3
  const b = "3"
  console.log(a < b)
  ----------------------------------------------------------------------------------------

 Operadores lógicos parte 2  &= É, OR = ou, NOT = não*  TABELA  VERDADE 
 --------------------------------------------------------------------------------------
 Operadro & usadno para verficar duas condição ou duas perguntas 

  const a = 2
  const b = 2
  console.log(a===b && a <= b)
  a é idêntico a b V e a é menor ou igual a B V =  Verdadeiro
  console.log(a==b && a < b)
  R: V e F = Resultato da condição False.
  console.log(a > b &&  a == b)
  F e V = F
  console.log(a>b && a < b)
  F e F : R False 

 --------------------------------------------------------------------------------------
  OR - ou representado por duas || , vamos verficar duas condição e validar uma ou outra verdadeira ou falsa 

  const = 2
  const = 2
  console.log(a === b || a <= b)
  //V ou V = Verdadeiro 
  console.log(a ===b || a < b)
  // V ou F = Verdadeiro 
  console.log(a>b || a===b)
  // F ou V = Verdadeiro 
  console.log( a>b || A<b)
  // F ou F = False 
*/
// --------------------------------------------------------------------------------------------
// NOT = Não
const a = 2
const b = 2
console.log(a === b) // Como o not inverte, esse condição e verdadeira mais ele coloca false
console.log(!(a === b)) // Sinal de negação, Agora ele coloca False 
// a não e idêntico a ?