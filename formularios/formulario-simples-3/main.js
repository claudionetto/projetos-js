
const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const modal = document.getElementById('modal');
const buttonModal = document.querySelector('#modal button')
buttonModal.onclick = () => {
    modal.close();
}


campos[0].addEventListener("input", nameValidate);
campos[1].addEventListener("input", emailValidate);
campos[2].addEventListener("input", passwordValidate);
campos[3].addEventListener("input", passwordConfirmationValidate);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    nameValidate();
    emailValidate();
    passwordValidate();
    passwordConfirmationValidate();

    if(nameValidate() && emailValidate() && passwordValidate() && passwordConfirmationValidate()){
        modal.showModal();
        form.reset();
    }
});



function addError(index){
    campos[index].style.border = "2px solid red";
    spans[index].style.display = "block";
}

function removeError(index){
    campos[index].style.border = "";
    spans[index].style.display = "none";
}

function nameValidate (){
    if(campos[0].value.length < 3){
        addError(0);
        return false;
    } else {
        removeError(0);
        return true;
    }
}

function emailValidate (){
    // !emailRegex.test(campos[1]) ? addError(1) : removeError(2);

    if(!emailRegex.test(campos[1].value)){
        addError(1);
        return false;
    } else {
        removeError(1);
        return true;
    }
}

function passwordValidate (){
    if(campos[2].value.length < 8){
        addError(2);
        return false;
    } else {
        removeError(2);
        passwordConfirmationValidate();
        return true;
    }
}

function passwordConfirmationValidate(){
    if(campos[2].value === campos[3].value && campos[3].value.length >= 8){
        removeError(3);
        return true;
    } else {
        addError(3);
        return false;
    }
}