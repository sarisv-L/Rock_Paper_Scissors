"use strict";

const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const compChoice = choices[Math.floor(Math.random() * 3)];
  return compChoice;
}

function getHumanChoice() {
  const humChoice = prompt("What is your Choice?");

  if (
    humChoice === "rock" ||
    humChoice === "paper" ||
    humChoice === "scissors"
  ) {
    return humChoice;
  } else return "That's not a valid Choice!";
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
    result = `YOU WIN! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    result = `YOU LOST! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }
  return result;
}

function playGame() {
  for (let i = 0; i < 2; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`Human: ${humanSelection}, Computer: ${computerSelection}`);
    console.log(playRound(humanSelection, computerSelection));

    console.log(humanScore, computerScore);
  }
}

playGame();
