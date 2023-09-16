
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs () {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    
    if(usernameValue === ''){
        setErrorFor(username, "O nome do usuário é obrigatório")
    } else {
        setSucessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, "O email é obrigatório");
    } else if (!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, insira um email válido");
    } else {
        setSucessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, "A senha é obrigatória");
    } else if (passwordValue.length < 8){
        setErrorFor(password, "A senha precisa de no minimo 8 caracteres");
    } else {
        setSucessFor(password);
    }

    if(passwordConfirmationValue === ''){
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória");
    } else if(passwordConfirmationValue !== passwordValue){
        setErrorFor(passwordConfirmation, "As senhas não conferem");
    } else {
        setSucessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll('.form-control');
    const isValid = [...formControls].every((formControl) => {
        return (formControl.className === 'form-control sucess');
    })

    if(isValid){
        alert("Cadastro Realizado")
    } else {
        alert("algo saiu mal")
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const msgError =  formControl.querySelector('small');
    console.log(formControl);

    msgError.innerText = message;
    formControl.className = "form-control error";
}

function setSucessFor(input){
    const formControl = input.parentElement;

    formControl.className = "form-control sucess"

}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }