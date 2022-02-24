
const init = () => {


    const inputEmail = document.querySelector('input[type="email"]')
    const inputPassword = document.querySelector('input[type="password"]')
    const submitButton = document.querySelector('.login-submit')
  
    // Validação de envio 
    if(submitButton) {
        submitButton.addEventListener('click', (event) =>{
            event.preventDefault();

            fetch('https://reqres.in/api/', {
                method: 'POST',
                headers: {
                    'content-Type':'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            }).then((response) =>{
                return response.json();
            }).then((data)=>{
                console.log(data)
            })
        })
    }
}

window.onload = init;