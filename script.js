const gameItems = ["rock", "paper", "scissors"];

const getComputerChoice = function () {
  const rand = gameItems[Math.floor(Math.random() * gameItems.length)];
  return rand;
};

console.log(getComputerChoice());
