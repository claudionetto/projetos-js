const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector("span.player");
const spanTimer = document.querySelector("span.timer");

spanPlayer.style.color = "red";
spanTimer.style.color = "blue";

const characters = [
  "beth",
  "jerry",
  "jessica",
  "morty",
  "pessoa-passaro",
  "pickle-rick",
  "rick",
  "summer",
  "meeseeks",
];

const createElementWithClass = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll(".disable-card");

  console.log(disabledCards.length);

  if (disabledCards.length === 20) {
    clearInterval(this.loop);
    alert(
      `Parabéns, ${spanPlayer.textContent}! Seu tempo foi: ${spanTimer.textContent}`
    );
  }
};

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute("data-character");
  const secondCharacter = secondCard.getAttribute("data-character");

  if (firstCharacter === secondCharacter) {
    firstCard.firstChild.classList.add("disable-card");
    secondCard.firstChild.classList.add("disable-card");

    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");

      firstCard = "";
      secondCard = "";
    }, 500);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal-card")) {
    return;
  }

  if (firstCard === "") {
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;
  } else if (secondCard === "") {
    target.parentNode.classList.add("reveal-card");
    secondCard = target.parentNode;

    checkCards();
  }
};

const createCard = (character) => {
  const card = createElementWithClass("div", "card");
  const front = createElementWithClass("div", "face front");
  const back = createElementWithClass("div", "face back");

  front.style.backgroundImage = `url('../images/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-character", character);

  return card;
};

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
};

const startTimer = () => {
  this.loop = setInterval(() => {
    const currentime = +spanTimer.innerHTML;
    spanTimer.innerHTML = currentime + 1;
  }, 1000);
};

window.onload = () => {
  const playerName = localStorage.getItem("player");
  spanPlayer.innerHTML = playerName;
  startTimer();
  loadGame();
};
