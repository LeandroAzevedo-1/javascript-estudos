const imgs = document.getElementById('img')
const img  = document.querySelectorAll("#img img")

let contimg = 0;

function carrossel(){
    contimg++;

    if(contimg > img.length - 1){
        contimg = 0;
    }

    imgs.style.transform = `translateX(${ -contimg * 500}px)`;
}

setInterval(carrossel, 1800)



