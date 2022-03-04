
function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('#res')
    // 1 validação 
   if(fano.value.lenght == 0 || fano.value > ano){
        window.alert("[ERRO] A data não existe ")
   }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value 
        var genero = ''
        //Colocando foto
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')    
       //verificar o sex da pessoa e imagem 
       if(fsex[0].checked){
           genero = 'Homem'
           //Verificado foto
           if(idade >= 0 && idade < 10){
               //criança
               img.setAttribute('src', 'bebe-homem.png')
           }else if( idade < 21){
               //jovem
               img.setAttribute('src', 'jovem-homem.png')
           }else if( idade < 50){
               //adulto
               img.setAttribute('src', 'adulto-homem.png')
           }else {
               //idoso
               img.setAttribute('src', 'idoso-homem.png')
           }
       }else if (fsex[1].checked){
           genero = 'Mulher'
           if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'bebe-mulher.png')
            }else if( idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-mulher.png')
            }else if( idade < 50){
                // adulto
                img.setAttribute('src', 'adulto-mulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'idoso-mulher.png')
            }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)//Acrescentar para incluir a foto 
    }
}


