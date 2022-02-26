let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

let ferverAgua = (chaleiraEstaNoFogao,fogaoEstaLigado) => {
    return new Promise((resolve, reject )=>{
        if(chaleiraEstaNoFogao && fogaoEstaLigado){ //verdadeiro verdeiro entra no resovle 
            console.log('Começando o processo de ferver água')
            resolve()
        }else{
            // se let fogaoEstaLigado for false ele entra nesse fluxo
            console.log('É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água ')
            reject()
        }
    })
}
let passarCafe = () => console.log('passando o café')

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe)
console.log('Fazendo café')

/* 
    Then - é uma função, segnifica então, exepmlo: quando uma função terminar de executar passa para a próxima 

    Só porque essa função retorna uma promise, pode usar o then quando chama a função, pode incadear 

    Executa primeiro o código Fazendo o café para depois executar 
    A função passarCafe, vai ser chamada por ultimo dentro do then 
 */ 