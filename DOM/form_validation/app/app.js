//Validacion de formularios JavaScript----------------------------------------------------
//tb podria hacerse con boostrap y la codificacion JS seria minima
const formulario = document.getElementById('formulario')

// const userName = document.getElementById('userName')
// const userEmail = document.getElementById('userEmail')
const userName = document.querySelector("input[name='userName']");
const userEmail = document.querySelector("input[name='userEmail']");
const msgSuccess = document.getElementById('alertSuccess')
const msgName = document.getElementById('alertName')
const msgEmail = document.getElementById('alertEmail')

formulario.addEventListener('submit', e => {
    e.preventDefault()

    console.log(msgName)
    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    const errors = []
    //!userName.value.trim() --- valida que no sea solo espacios en el input
    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        errors.push({
            itemInput: userName,
            itemP: msgName,
            msg: 'Nombre incorrecto'
        })
        console.log("Solo letras");
    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        msgName.classList.add("d-none");
    }

    if (!regUserEmail.test(userEmail.value)) {
        errors.push({
            itemInput: userEmail,
            itemP: msgEmail,
            msg: 'Formato email no válido'
        })
        console.log("Formato email no válido");
    } {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        msgEmail.classList.add("d-none");
    }

    if (errors.length > 0) {
        pintarMsgError(errors)
        return
    }
    console.log("Formulario enviado con éxito");
    pintarMsgSuccess()
})

const pintarMsgSuccess = () => {
    msgSuccess.classList.remove('d-none')
    msgSuccess.textContent = "Formulario enviado con éxito"
}

const pintarMsgError = (errs) => {
    errs.forEach((err) => {
        err.itemInput.classList.add('is-invalid')
        err.itemP.classList.remove('d-none')
        err.itemP.textContent = err.msg
        console.log(err.itemP)
    })

    msgSuccess.classList.add('d-none')
}
