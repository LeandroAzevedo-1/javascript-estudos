const menuHamburguer = document.getElementById('menuhamburguer')

const menuNav = document.getElementById('navbar')

menuHamburguer.addEventListener('click', () =>{
    menuNav.classList.toggle('menuAtivo')//criando classe para colocar no css
})