const email = document.getElementById('email')
const password = document.getElementById('password')

email.addEventListener('focus',() =>{
    email.style.borderColor="#4a5f6a";
})
password.addEventListener('focus',() =>{
    password.style.borderColor="#4a5f6a";
})