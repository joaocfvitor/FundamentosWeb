let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

function validarNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3 ) {
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
    }
}

function validarEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido!'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = "Email válido!"
        txtEmail.style.color = 'green'
    }
}

function validarAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length > 100) {
        txtAssunto.innerHTML = 'O número máximo de caracteres é de 100.'
        txtAssunto.style.color = 'red'
    } 
}