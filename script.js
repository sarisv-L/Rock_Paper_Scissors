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

console.log(getComputerChoice(), getHumanChoice());
