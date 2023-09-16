
const filterInput = document.getElementById("filter");
const cardsDOM = document.querySelectorAll(".cards li");

filterInput.addEventListener("input", filterCards);

function filterCards(){
    if(filterInput.value){
        cardsDOM.forEach(element => {
            let cardHeading = element.querySelector("h2");
            cardHeading = cardHeading.textContent.toLowerCase();

            const filterInputValue = filterInput.value.toLowerCase();

            if(cardHeading.includes(filterInputValue)){
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
        );
    } else {
        cardsDOM.forEach(element => element.style.display = "block");
    }
};


