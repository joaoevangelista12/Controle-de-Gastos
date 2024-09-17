function onChangeEmail(){
    toggleBotoesDesabilitados()
    toggleErrosEmail()
}

function onChangePassword(){
    toggleBotoesDesabilitados()
    togglePasswordErro()
}
function loginUser(){
    window.location.href = "home.html"
}

function recoverPassword() {
    window.location.href = "recover.html"
}

function registerUser(){
    window.location.href = "register.html"
}

function isEmailValido(){
    const email = form.email().value
    return validarEmail(email)
}

function toggleErrosEmail(){
    const email = form.email().value
    if(!email){
        //Email eh obrigatorio
        form.emailObrigatorioErro().style.display = "block"
    } else {
        form.emailObrigatorioErro().style.display = "none"
    }

    if(validarEmail(email)){
        //Email eh invalido
        form.emailInvalidoErro().style.display = "none"
    } else {
        form.emailInvalidoErro().style.display = "block"
    }
}

function validarEmail(email){
    return /\S+@\S+\.\S+/.test(email)
}

function isPasswordValido(){
    const password = form.password().value
    return password.length > 0
}


function toggleBotoesDesabilitados(){
    const emailValido = isEmailValido()
    const passwordValido = isPasswordValido()

    form.buttonRecover().disabled = !emailValido
    form.buttonLogin().disabled = !(emailValido && passwordValido)
}

function togglePasswordErro(){
    const password = form.password().value
    if(!password){
        form.passwordObrigatoria().style.display = "block"
    } else {
        form.passwordObrigatoria().style.display = "none"
    }
}

const form = {
    email: () => document.getElementById('email'),
    emailObrigatorioErro: () => document.getElementById('email-obrigatorio-erro'),
    emailInvalidoErro: () => document.getElementById('email-invalido-erro'),
    password: () => document.getElementById('password'),
    passwordObrigatoria: () => document.getElementById('senha-obrigatoria-erro'),
    buttonLogin: () => document.getElementById('login'),
    buttonRecover: () => document.getElementById('recover')

}
