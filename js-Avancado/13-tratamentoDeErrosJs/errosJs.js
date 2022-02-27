
let chaleiraEstaNoFogao = 'teste'
let fogaoEstaLigado = true
let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject )=>{
        // Validando um erro 
        if(typeof chaleiraEstaNoFogao != 'boolean') throw "Somente o tipo boleano é aceito"//fazendo uma excessão via código 

        if(chaleiraEstaNoFogao && fogaoEstaLigado){ //verdadeiro verdeiro entra no resovle 
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        } else {
            // se let fogaoEstaLigado for false ele entra nesse fluxo
            const mensagemDeErro = ('É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água ')
            reject(mensagemDeErro) // reject, ele retorna um erro
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

async function iniciarProcessoDeFazerCafe(){
    try{
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarOCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)

        throw "Mensagem de erro"
        }catch(error){
            console.log(error)
        }finally{
            console.log('Finalizada o ritual do café, bora trabalahar ')
        }
}
iniciarProcessoDeFazerCafe()
/*
    VAMOS USAR O try tente executar { bloco do tray, tudo que vai dentro vai ser testado } catch(error){Bloco do catch, qualquer erro que tiver vi vir para ocatch }QUALQUER ERRO ELE JOGA NO catch, catch quer dizer pegar 

    trocamos o resultado para false da variável para 
    let fogaoEstaLigado = false

    Vai entrar na função ferverAgua, como está faze vai entrar no else 
    else {
            // se let fogaoEstaLigado for false ele entra nesse fluxo
            let mensagemDeErro = ('É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água ')
            reject(mensagemDeErro)
        }
    - E imprimir a mensagem de erro 
    finally{
        É a finalização do tratamento. 
        É muito usado fechar uma conexão de banco de dados 
        fehcar um arquivo      
        }

*/
