const inputs = document.querySelectorAll("label input");

inputs.forEach((input) => {
  input.addEventListener("blur", handleInputFocus);
  input.addEventListener("focus", handleInputFocus);
});

function handleInputFocus(event) {
  const span = event.target.previousElementSibling;

  if (event.type === "blur" && !event.target.value) {
    span.classList.remove("active");
  } else {
    span.classList.add("active");
  }
}

const button = document.querySelector("button[type=submit]");

const addLoading = () => {
    button.innerHTML = `<ion-icon class="loading" name="reload-circle-outline"></ion-icon>`;
}

const removeLoading = () => {
    button.innerHTML = `Enviar`;
}

const handleSubmit = (event) => {
  event.preventDefault();
  addLoading();

  const name = document.querySelector("input[name=name]").value;
  const email = document.querySelector("input[name=email]").value;

  fetch("https://api.sheetmonkey.io/form/pT8CWCuyXTxsLPepUCnWw3", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  }).then( removeLoading )
  
  ;
};

document.querySelector("form").addEventListener("submit", handleSubmit);
