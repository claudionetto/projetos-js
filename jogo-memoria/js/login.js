
const loginInput = document.querySelector(".login__input");
const loginButton = document.querySelector(".login__button");
const loginForm = document.querySelector(".login-form")


const validateInput = ({ target }) => {
    if(target.value.length > 2){
        loginButton.removeAttribute('disabled')
        return;
    }

    loginButton.setAttribute("disabled", "");
}

const handleSubmit = (event) => {
    event.preventDefault();
    const name = loginInput.value;
    
    localStorage.setItem('player', name);
    window.location = "pages/game.html";
}

loginInput.addEventListener('input', validateInput);
loginForm.addEventListener('submit', handleSubmit);

