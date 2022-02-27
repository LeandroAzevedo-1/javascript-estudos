
let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true
let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject )=>{
        if(chaleiraEstaNoFogao && fogaoEstaLigado){ //verdadeiro verdeiro entra no resovle 
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        } else {
            // se let fogaoEstaLigado for false ele entra nesse fluxo
            console.log('É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água ')
            reject()
        }
    })
}
let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log('Passo 2 finalizado: Café foi passado')
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resole)=>{
        console.log('Passo 3 finalizado: Terminei de tomar o café')
        resole(true)
    })
}
let lavarXicara = (cafeTomado)=>{
    return new Promise((resolve)=>{
        console.log('Passo 4 finalizado: Terminei de lavar a xícara')
        resolve(true)
    })
}

/*
    Função que vai ser responsavel de iniciar todos esse processo de fazer o café, vamos usar a palavra asybc antes do início da função para transformar ela em async.

    await é para que espero a função ferverAgua terminar e retorna o valor que esperamos. Só pode usar o await se a função estiver a palavra chave async no início.

    RESULADO 
        Passo 1 finalizado: Água foi fervida
        Passo 2 finalizado: Café foi passado
        Passo 3 finalizado: Terminei de tomar o café
        Passo 4 finalizado: Terminei de lavar a xícara
        Finalizada o ritual do café, bora trabalahar 
    
    - O AWAIT FAZ A MESMA FUNÇÃO DO THEN, SO QUE MENOS CÓDIGO 

*/

async function iniciarProcessoDeFazerCafe(){
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassado = await passarOCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if(xicaraLavada) console.log('Finalizada o ritual do café, bora trabalahar ')
}
iniciarProcessoDeFazerCafe()
