/*
vamos trabalahar com um api pública de cartas 
 Vamos usar a api: https://deckofcardsapi.com/
    Criar um baralho 
         tirar um carta aleatorio apresentar na tela 
            criar um botão para ficar retirando as cartas 
   
*/ 

async function criarBarlhoEmbaralhado(){
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()
    
}
//função tirar a carta do baralho 
async function tirarUmaCarta(deck_id){
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirarUmaCartaAleatoriaDoBaralho(){
    const baralho =  await criarBarlhoEmbaralhado()
    const carta = await tirarUmaCarta(baralho.deck_id)//.deck_idconsigo pegar o id 
    // Pegar a carta 
    const imagemCarta = carta.cards[0].image
    // tirar um carta aleatorio apresentar na tela, add no html a carta 
    document.getElementById('carta').src = imagemCarta
    //
}
// criar um botão para ficar retirando as cartas
document.getElementById('tirar-carta').addEventListener('click', ()=>{
    tirarUmaCartaAleatoriaDoBaralho()
})



tirarUmaCartaAleatoriaDoBaralho()
// console.log("segue o fluxo sem esperar")