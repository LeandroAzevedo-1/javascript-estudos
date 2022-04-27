class validator{

    constructor() {
        this.validations = [
            'data-min-length',
        ]
    }

    // Iniciar a validação de todos os campos
    validate(form){
        // pegar os inputs
    let inputs = form.getElementByTagName('input')

    // transformo uma HTMLCollection -> array
    let inputsArray = [...inputs]

    //loop nos inputs e validação meadiante ao que for encontrado
    inputsArray.forEach(function(input){

        // loop em todas as validações existentes
        for(let i =0; this.validations.length > i; i++){
            // Verfica se a vaidação atual existe no input
            if(input.getAttribute(this.validations[i]) != null) {

            // data-min-length -> minlength
            let method = this.validations[i].replace('data-', '')

            // valor do input
            let value = input.getAttribute(this.validations[i])

            // invocar o metodo
            this[method](input, value)

            }

        }
        
    }, this)

    }
    // Verfica se um input tem um número de mínimo de caracteres
    minlength(input, minValue){
        let inputLength = input.value.length

        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`

        if(inputLength < minValue){
            this.printMessage(input, errorMessage)
        }
    }
    // metedo imprime a msg de erro na tela 
    printMessage(input, msg){
        let template = document.querySelector('.error-validation').cloneNode(true)

        template.textContent = msg

        let inputParent = input.parentNode

        template.classList.remove('template')

        inputParent.appendChild(template)
    }
}
let form = document.getElementById("registro-form")
let submit = document.getElementById("btn-submit")

let validator = new validator()
// Evento que dispara as validações 
submit.addEventListener('click', function(e){

    e.preventDefault()

    validator.validate(form)
})