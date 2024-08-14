const gameItems = ["rock", "paper", "scissors"];

const getComputerChoice = function () {
  const rand = gameItems[Math.floor(Math.random() * gameItems.length)];
  return rand;
};

const getHumanChoice = function () {
  let choice = prompt("What is your choice?");
  switch (choice) {
    case "rock":
    case "paper":
    case "scissors":
      return choice;
      break;
    default:
      prompt("That's not a valid choice!");
  }
};

let humanScore = 0;
let computerScore = 0;
const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a Tie, no one gets a point!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    humanScore += 1;
  } else {
    console.log(`You Lost! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
};

const determineWinner = function () {
  console.log("Final Scores:");
  console.log(`Human: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won!");
  } else if (computerScore > humanScore) {
    console.log("The computer wins this time. Better luck next time!");
  }
};

const playGame = function () {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  determineWinner();
};

playGame();
