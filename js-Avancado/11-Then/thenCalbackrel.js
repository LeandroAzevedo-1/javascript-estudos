
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

// Chamando a 1º função para depois com o comando then chamar ao outras
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    .then(()=>{
        return passarOCafe();
})
    .then(()=>{
        return tomarCafe();
    })
    .then(()=>{
        return lavarXicara();
    })
    .then(()=>{
        console.log('Finalizado ritual do café, bora trabalhar ')
    });


/* 
    Como a primeira função retorna uma promise, pode usar o then para chamar as próximas funções
    Para melhor a função de calback rel vamos usar o then.
    nesse caso estou chamando todas as funções que foi criada acima 
*/ 