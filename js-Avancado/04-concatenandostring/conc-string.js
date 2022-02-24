// 1º Formula de Concatenação 
const imprimirInformacoesPessoa = (primeiroNome, ultimoNome,idade) => {
    return "Primeiro Nome: " + primeiroNome + " Ultimo Nome: " + ultimoNome + ", Idade " + idade;
}
console.log(imprimirInformacoesPessoa("Leandro", "Azevedo", 35));

// 2º Formula concatenação
const pessoa = (primeiroNome, ultimoNome,idade) => {
    return `Olá ${primeiroNome}, de ${ultimoNome}, Sua Idade é ${idade}`;
}
console.log(pessoa("Leandro", "Azevedo", 35));

/* 
    3º Formula de concatenação, chamada da função, A FUNÇÃO E PASSADO DENTRO DO CONSOLE.LOG, concatenando o retorna da função e acrescentando um texto no final 
*/
const dadosPessoal = (primeiroNome, ultimoNome,idade) => {
    return `Olá ${primeiroNome}, de ${ultimoNome}, Sua Idade é ${idade}`;
}
console.log(`${dadosPessoal("Pedro", "Azevedo", 20)}, Você é um DevQuester`);

// função Soma e concatena dois valores 
const soma = () => {
}
console.log( `A soma entre os valores são: ${10 + 30 }`);
