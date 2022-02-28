// Criar função operação matemática
// Vamos chamar essa função em outro arquivo.! então vamos exportar essa função, por isso usamos o export antes da palavra reservada funtion

// Criar função operação matemática
function somar(numero1, numero2){
    return numero1 + numero2 
}
function multiplicar(numero1, numero2){
    return numero1 * numero2 
}

// exportar multipla função precisamos abri e fechar chave e passar os nomes das funções 
export {somar, multiplicar}