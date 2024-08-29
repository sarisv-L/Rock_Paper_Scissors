"use strict";

const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const compChoice = choices[Math.floor(Math.random() * 3)];
  return compChoice;
}

function playRound(humanChoice, computerChoice) {
  let result = "";

  if (humanChoice === computerChoice) {
    result = "It's a TIE!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `YOU WIN!  ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    result = `YOU LOST!  ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }
  return result;
}

const btn = document.querySelectorAll("button");
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const humanSelection = btn.className;

    const computerSelection = getComputerChoice();
    // console.log(`Human: ${humanSelection}, Computer: ${computerSelection}`);
    //console.log(playRound(humanSelection, computerSelection));
    //console.log(humanScore, computerScore);
    sel.textContent = `Player: ${humanSelection}, Computer: ${computerSelection} `;
    res.textContent = `${playRound(humanSelection, computerSelection)}`;

    humScore.textContent = `PLayer Score: ${humanScore}`;
    comScore.textContent = `Computer Score: ${computerScore}`;

    if (humanScore === 5) {
      res.textContent = "Congrats! You WON! ";
      res.classList.add("greenText");
      btn.disabled = true;
    } else if (computerScore === 5) {
      res.textContent = "Game Over! You LOST! ";
      res.classList.add("redText");
      btn.disabled = true;
    }
  });
});

const content = document.querySelector("#results");
const sel = document.createElement("div");
sel.classList.add("choices");

const res = document.createElement("div");
res.classList.add("result");

const humScore = document.createElement("div");
humScore.classList.add("humScore");

const comScore = document.createElement("div");
comScore.classList.add("comScore");

content.appendChild(sel);
content.appendChild(res);
content.appendChild(humScore);
content.appendChild(comScore);
