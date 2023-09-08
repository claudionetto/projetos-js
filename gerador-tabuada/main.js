
const btnTabuada = document.getElementById("btn-tabuada");
btnTabuada.addEventListener("click", gerarTabuada);

const btnLimparTabuada = document.getElementById("limpar-tabuada");
btnLimparTabuada.addEventListener("click", limparTabuada);

function gerarTabuada(){
  const numero = document.getElementById("numero");
  
  if(numero.value.length == 0){
    alert("Insira um número antes")
    return;
  }

  const numeroValue = Number(numero.value);
  const resultado = document.querySelector("div.resultado");
  const novoElementoId = `tabuada-${numeroValue}`;

  if(!document.getElementById(novoElementoId)){
    var novoElemento = document.createElement("div");
    novoElemento.style.border = "1px solid black"
    novoElemento.style.padding = "5px"
    novoElemento.id = novoElementoId;

    for(let x = 1; x <= 10; x++){
        let produto = x * numeroValue;

        if(x === 10){
          novoElemento.innerHTML += `<p>${numeroValue} x ${x} = ${produto}</p>`
        } else{
          novoElemento.innerHTML += `<p>${numeroValue} x ${x} &nbsp = ${produto}</p>`
        }
    }

    resultado.appendChild(novoElemento);
  } else {
    alert("Você já possui uma tabuada deste número")
  }
}

function limparTabuada(){
  const resultado = document.querySelector("div.resultado");

  resultado.innerHTML = ``;
}