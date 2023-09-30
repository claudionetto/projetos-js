const starIconDOM = document.querySelectorAll(".star-icon");
const button = document.querySelector("button");
const tituloDOM = document.querySelector("h1");

starIconDOM.forEach((element) => {
  element.addEventListener("click", () => {
    const starClass = element.classList;
    if (!starClass.contains("ativo")) {
      const starIconAtivo = document.querySelector(".star-icon.ativo");
      starIconAtivo.classList.remove("ativo");
    }

    element.classList.add("ativo");
  });
});

button.addEventListener("click", () => {
  const starIconAtivo = document.querySelector(".star-icon.ativo");
  const avaliacao = starIconAtivo.getAttribute("data-attribute");
  tituloDOM.innerHTML = `Você avaliou em <span> ${avaliacao} </span>`
  for (let index = 0; index < avaliacao; index++) {
    tituloDOM.innerHTML += `<span>&#9733</span>`;
  }
});
