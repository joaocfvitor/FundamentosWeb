let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOK = false
let emailOK = false
let assuntoOK = false

let mapa = document.querySelector('#mapa')

function validarNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3 ) {
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOK = true
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
        emailOK = true
    }
}

function validarAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length > 100) {
        txtAssunto.innerHTML = 'O texto é muito grande, digite no máximo 100 caracteres!.'
        txtAssunto.style.color = 'red'
    } else {
        assuntoOK = true
    }
}

function enviar() {

    if (assuntoOK == true && nomeOK == true && emailOK == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente!')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.hegth = '600px'
    }

function mapaNormal() {
    mapa.style.width = '800px'
    mapa.style.hegth = '200px'
}