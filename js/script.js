const formEl = document.querySelector("form");
const h1El = document.querySelector("h1");
const allPEl = document.querySelectorAll("p");
const allBtnEl = document.querySelectorAll("button");
let playername = null;
let roundCounter = 1;
let roundPoints = 0;
let totalPoints = 0;
let dice = null;
const h2El = document.querySelector("h2");
let diceIsOne = false;

allBtnEl[1].addEventListener("click", throwDiceHandler);
allBtnEl[2].addEventListener("click", endRound);
formEl.addEventListener("submit", formHandler);
console.log(allPEl);

function formHandler(event) {
  event.preventDefault();
  playername = document.querySelector("input").value;
  h1El.innerText = `Spelare:${playername}`;
  formEl.style.display = "none";
  allPEl[0].style.display = "none";
  allPEl[2].innerText = `Runda: ${roundCounter}`;
  allPEl[3].innerText = `Rundans Poäng: ${roundPoints}`;
  allPEl[4].innerText = `Totala Poäng: ${totalPoints}`;
  allBtnEl[0].disabled = true;
  formEl.reset;
}
function throwDiceHandler() {
  if (playername != null) {
    dice = Math.ceil(Math.random() * 6);
    allPEl[1].innerText = `slog: ${dice}`;
    if (dice == 1) {
      endRound((diceIsOne = true));
    } else {
      allPEl[3].innerText = `Rundans Poäng: ${(roundPoints += dice)}`;
    }
  }
}
function endRound() {
  console.log(diceIsOne);
  if (!diceIsOne) {
    console.log(roundPoints);
    allPEl[4].innerText = `Totala Poäng: ${(totalPoints += roundPoints)}`;
    if (totalPoints >= 100) {
      allBtnEl[1].disabled = true;
      allBtnEl[2].disabled = true;
      h2El.innerText = `Du vann! Det tog ${roundCounter} rundor`;
      allPEl[1].style.display = none;
    }
  }
  allPEl[3].innerText = `Rundans Poäng: ${(roundPoints = 0)}`;
  allPEl[2].innerText = `Runda: ${(roundCounter += 1)}`;
  diceIsOne = false;
}
